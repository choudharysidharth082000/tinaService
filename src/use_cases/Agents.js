const axios = require("axios");
const { configAxios } = require("../axiosConfig");
const fetchDiscoveredAgents = async (token) => {
  try {
    console.log(token);
    const fetchAgents = await axios.get(
      `${process.env.API_URL}/agents/hosts/discovered`,
      configAxios(token)
    );
    if (fetchAgents.status === 200) {
      return fetchAgents.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
//fetch hosts and applicaitions for agents
const fetchHosts = async (token) => {
  try {
    //fetching hosts
    const fetchHosts = await axios.get(
      `${process.env.API_URL}/agents?category=host`,
      configAxios(token)
    );
    //fetching applications
    const fetchApplcations = await axios.get(
      `${process.env.API_URL}/agents?category=application`,
      configAxios(token)
    );
    //fetching agents types
    const fetchAgentsTypes = await axios.get(
      `${process.env.API_URL}/agents/applications/types`,
      configAxios(token)
    );
    //Getting the hosts type list
    const fetchHostsTypesList = await axios.get(
      `${process.env.API_URL}/agents/hosts/types`,
      configAxios(token)
    );
    //get Binaries
    //Getting the hosts type list
    const fetchHostBinaries = await axios.get(
      `${process.env.API_URL}/agents/hosts/binaries`,
      configAxios(token)
    );
    const finalObj = {
      hosts: fetchHosts.data,
      aplications: fetchApplcations.data,
      Agenttypes: fetchAgentsTypes.data,
      HostsTypesList: fetchHostsTypesList.data,
      HostBinaries: fetchHostBinaries.data.binaryList,
    };
    return finalObj;
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};
//fetching all the  users
const fetchUsers = async (token) => {
  try {
    const fetchUsers = await axios.get(
      `${process.env.API_URL}/users`,
      configAxios(token)
    );
    const fetchProfile = await axios.get(
      `${process.env.API_URL}/users/profiles/DEFAULT`,
      configAxios(token)
    );
    const fetchUserGroups = await axios.get(
      `${process.env.API_URL}/users/groups`,
      configAxios(token)
    );
    const finalObj = {
      users: fetchUsers.data,
      fetchProfile: fetchProfile.data,
      userGroups: fetchUserGroups.data,
    };
    return finalObj;
  } catch (error) {
    return error.message;
  }
};
//fetch tunables
const fetchTunables = async (token, hostPublicID) => {
  try {
    //fetching the catalog Information
    const fetchCatalog = await axios.get(
      `${process.env.API_URL}/agents/hosts/${hostPublicID}/catalogs`,
      configAxios(token)
    );
    const fetchTunables = await axios.get(
      `${process.env.API_URL}/agents/hosts/${hostPublicID}/tunables`,
      configAxios(token)
    );
    const fetchTunablesDescription = await axios.get(
      `${process.env.API_URL}/agents/hosts/${hostPublicID}/tunables-descriptions`,
      configAxios(token)
    );
    const finalObj = {
      catalogs: fetchCatalog.data,
      tunables: fetchTunables.data,
      tunableDescription: fetchTunablesDescription.data,
    };
    return finalObj;
  } catch (error) {
    return error.message;
  }
};
//getting the strategies
const getStrategies = async (token) => {
  try {
    //get all strategies
    const getStrategies = await axios.get(
      `${process.env.API_URL}/strategies`,
      configAxios(token)
    );
    return getStrategies.data;
  } catch (error) {
    return error.message;
  }
};
//storages
const fetchStorages = async (token) => {
  try {
    const fetchStorages = await axios.get(
      `${process.env.API_URL}/storages`,
      configAxios(token)
    );
    const fetchLibraryTypes = await axios.get(
      `${process.env.API_URL}/storages/library/types`,
      configAxios(token)
    );
    const driveTypes = await axios.get(
      `${process.env.API_URL}/storages/drives/types`,
      configAxios(token)
    );
    const finalObj = {
      storages: fetchStorages.data,
      librarytypes: fetchLibraryTypes.data,
      driveTypes: driveTypes.data,
    };
    return finalObj;
  } catch (error) {
    return error.message;
  }
};
const securityRules = async (token) => {
  try {
    const fetchSecurity = await axios.get(
      `${process.env.API_URL}/security-rules`,
      configAxios(token)
    );
    const finalObj = {
      securityRules: fetchSecurity.data,
    };
    return finalObj;
  } catch (error) {
    return error.message;
  }
};
//fetcching all the schedules
const schedules = async (token) => {
  try {
    const fetchSchedules = await axios.get(
      `${process.env.API_URL}/schedules`,
      configAxios(token)
    );
    const finalObj = {
      schedules: fetchSchedules.data,
    };
    return finalObj;
  } catch (error) {
    return error.message;
  }
};
//rman scripts
const rmanScripts = async (token) => {
  try {
    const fetchRmanScripts = await axios.get(
      `${process.env.API_URL}/configurations/rman-configurations`,
      configAxios(token)
    );
    const finalObj = {
      rmanScripts: fetchRmanScripts.data,
    };
    return finalObj;
  } catch (error) {
    return error.message;
  }
};
//pools
const pools = async (token) => {
  try {
    const pool = await axios.get(
      `${process.env.API_URL}/pools`,
      configAxios(token)
    );
    const findObj = {
      pools: pool.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//Operator Requests
const operatorRequest = async (token) => {
  try {
    const pool = await axios.get(
      `${process.env.API_URL}/oprequests`,
      configAxios(token)
    );
    const findObj = {
      oprequests: pool.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//Notifications
const notifications = async (token) => {
  try {
    const notifications = await axios.get(
      `${process.env.API_URL}/notifications/indicators-summary`,
      configAxios(token)
    );
    const findObj = {
      notifications: notifications.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//logs
const logs = async (token) => {
  try {
    const logs = await axios.get(
      `${process.env.API_URL}/logs`,
      configAxios(token)
    );
    const findObj = {
      logs: logs.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//licence
const licence = async (token) => {
  try {
    const licence = await axios.get(
      `${process.env.API_URL}/configurations/licence`,
      configAxios(token)
    );
    const findObj = {
      licence: licence.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//jobs
const jobs = async (token) => {
  try {
    const jobs = await axios.get(
      `${process.env.API_URL}/jobs`,
      configAxios(token)
    );
    const findObj = {
      jobs: jobs.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//event notifiactionns
const fetchEventNotifications = async (token) => {
  console.log(token);
  try {
    const notifications = await axios.get(
      `${process.env.API_URL}/configurations/event-notifications`,
      configAxios(token)
    );
    console.log(notifications);
    const findObj = {
      notifications: notifications,
    };
    return findObj;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};
//get domains filtering
const fetchDomainFiltering = async (token) => {
  try {
    const domains = await axios.get(
      `${process.env.API_URL}/configurations/domains-filtering`,
      configAxios(token)
    );
    const findObj = {
      domains: domains.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//get De Duplication server List
const fetchDeDuplicationServer = async (token) => {
  try {
    const server = await axios.get(
      `${process.env.API_URL}/deduplication-server`,
      configAxios(token)
    );
    const findObj = {
      server: server.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//fetch Catalog Details
const fetchCatalog = async (token) => {
  try {
    const catalog = await axios.get(
      `${process.env.API_URL}/current-catalog/info`,
      configAxios(token)
    );
    const catalogParameters = await axios.get(
      `${process.env.API_URL}/current-catalog/parameters`,
      configAxios(token)
    );
    const findObj = {
      catalog: catalog.data,
      catalogParameters: catalogParameters.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//fetch Backup selections Details
const BackupSelctions = async (token) => {
  try {
    const selections = await axios.get(
      `${process.env.API_URL}/backup-selections`,
      configAxios(token)
    );
    const findObj = {
      backupSelections: selections.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};
//fetch Archives Details
const fetchArchives = async (token) => {
  try {
    const archives = await axios.get(
      `${process.env.API_URL}/archives`,
      configAxios(token)
    );
    const archivesTypes = await axios.get(
      `${process.env.API_URL}/archives/types`,
      configAxios(token)
    );
    const findObj = {
      archives: archives.data,
      archivesTypes: archivesTypes.data,
    };
    return findObj;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  fetchDiscoveredAgents,
  fetchHosts,
  fetchUsers,
  fetchTunables,
  getStrategies,
  fetchStorages,
  securityRules,
  //new
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
  fetchArchives
};
