// autogenerated using
// jq '.. | .operationId?' openapi/cos.json  | grep -v null
var connectorTypes = require("../../_data_/connectorTypes.json");
var ConnectorClusterList = require("../../_data_/ConnectorClusterList.json");
var ConnectorList = require("../../_data_/ConnectorList.json");
module.exports = {
  getVersionMetadata: async (c, req, res) => {
    res.status(200).json({});
  },
  getConnectorTypeByID: async (c, req, res) => {
    res.status(200).json({});
  },
  getConnectorTypes: async (c, req, res) => {
    res.status(200).json(connectorTypes);
  },
  createConnector: async (c, req, res) => {
    res.status(200).json({});
  },
  listConnectors: async (c, req, res) => {
    res.status(200).json(ConnectorList);
  },
  getConnector: async (c, req, res) => {
    res.status(200).json({});
  },
  deleteConnector: async (c, req, res) => {
    res.status(200).json({});
  },
  patchConnector: async (c, req, res) => {
    res.status(200).json({});
  },
  createConnectorCluster: async (c, req, res) => {
    res.status(200).json({});
  },
  listConnectorClusters: async (c, req, res) => {
    res.status(200).json(ConnectorClusterList);
  },
  getConnectorCluster: async (c, req, res) => {
    res.status(200).json({});
  },
  updateConnectorClusterById: async (c, req, res) => {
    res.status(200).json({});
  },
  deleteConnectorCluster: async (c, req, res) => {
    res.status(200).json({});
  },
  getConnectorClusterAddonParameters: async (c, req, res) => {
    res.status(200).json({});
  },

  // Handling auth
  notFound: async (c, req, res) => res.status(404).json({ err: "not found" }),
  unauthorizedHandler: async (c, req, res) =>
    res.status(401).json({ err: "unauthorized" }),
};
