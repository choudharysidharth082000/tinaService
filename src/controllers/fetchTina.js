const axios = require("axios");
const https = require("https");
const moment = require("moment");
const {
  fetchDiscoveredAgents,
  fetchHosts,
  fetchUsers,
  fetchTunables,
  getStrategies,
  fetchStorages,
  securityRules,
  schedules,
  rmanScripts,
  pools,
  operatorRequest,
  notifications,
  logs,
  licence,
  jobs,
  fetchEventNotifications,
  fetchDomainFiltering,
  fetchDeDuplicationServer,
  fetchCatalog,
  BackupSelctions,
  fetchArchives,
} = require("../use_cases/Agents");
const { loginConfig } = require("../axiosConfig");
//functions
const findData = async (req, res, next) => {
  try {
    //login
    const { user, password, catalog, server } = req.body;
    const finalObj = {
      lang: "en",
      user: user,
      password: password,
      connectReason: "adminAndSupervise",
      catalog: catalog,
      server: server,
    };
    const login = await axios.put(
      `${process.env.API_URL}/users/authenticate`,
      finalObj,
      loginConfig
    );
    console.log(login.data.token);
    //fetching all the agents
    const getAgents = await fetchDiscoveredAgents(login.data.token);
    //fethcing hosts
    const hosts = await fetchHosts(login.data.token);
    const users = await fetchUsers(login.data.token);
    const fetchCatalogs = await fetchTunables(
      login.data.token,
      hosts.hosts[0].publicId
    );
    console.log(await fetchEventNotifications(login.data.token));
    res.json({
      agents: hosts,
      users: users,
      catalogs: fetchCatalogs,
      strategies: await getStrategies(login.data.token),
      storages: await fetchStorages(login.data.token),
      rulesSecurity: await securityRules(login.data.token),
      schedules: await schedules(login.data.token),
      rmanScripts: await rmanScripts(login.data.token),
      pools: await pools(login.data.token),
      operatorRequest: await operatorRequest(login.data.token),
      notifications: await notifications(login.data.token),
      logs: await logs(login.data.token),
      licence: await licence(login.data.token),
      jobs: await jobs(login.data.token),
      eventNotifications: await fetchEventNotifications(login.data.token),
      domainFiltering: await fetchDomainFiltering(login.data.token),
      deDuplicationServer: await fetchDeDuplicationServer(login.data.token),
      catalog: await fetchCatalog(login.data.token),
      backupSelections: await BackupSelctions(login.data.token),
      archives: await fetchArchives(login.data.token),
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
//test controller
const test = async (req, res, next) => {
  try {
    
     //login
     const { user, password, catalog, server } = req.body;
     const finalObj = {
       lang: "en",
       user: user,
       password: password,
       connectReason: "adminAndSupervise",
       catalog: catalog,
       server: server,
     };
     const login = await axios.put(
       `${process.env.API_URL}/users/authenticate`,
       finalObj,
       loginConfig
     );
     const fromDate = moment().subtract(1, "minutes").toISOString();
     const toDate = new Date().toISOString();
     console.log(fromDate, toDate);
     console.log(login.data.token);
    const Values = await Promise.all([
      securityRules(login.data.token),
      fetchStorages(login.data.token),
      getStrategies(login.data.token),
      schedules(login.data.token),
      logs(login.data.token, fromDate, toDate),
      pools(login.data.token),
      rmanScripts(login.data.token),
      operatorRequest(login.data.token),
      notifications(login.data.token),
      licence(login.data.token),
      jobs(login.data.token),
      fetchEventNotifications(login.data.token),
      fetchDomainFiltering(login.data.token),
      fetchDeDuplicationServer(login.data.token),
      fetchCatalog(login.data.token),
      BackupSelctions(login.data.token),
      fetchArchives(login.data.token)
    ]);
    res.send(Values.flat());
  } catch (error) {
    res.send(error.message);
  }
}
module.exports = {
  findData,
  test
};
