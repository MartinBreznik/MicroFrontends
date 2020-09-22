import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './App.css';
import Test from './components/testTemplate';
import RenderTable from './components/renderTable';
import NewFirmware from './components/tableModals/newFirmwareModal';
import UpdateFirmware from './components/tableModals/updateFirmwareModal';
import FirmwareById from './components/tableModals/firmwareById';
import InitialDataByFirmwareId from './components/tableModals/downloadInitialByFirmwareId';
import UpdateDataByFirmwareId from './components/tableModals/downloadUpdateByFirmwareId';
import DeleteFirmware from './components/tableModals/deleteFirmwareModal';
import UpdateFirmwareData from './components/tableModals/updateFirmwareDataFiles';
import NewFirmwareUpdate from './components/tableModals/newFirmwareUpdate';
import TerminalUpdateByFirmwareId from './components/tableModals/terminalUpdateByFirmware';
import TerminalUpdateDetails from './components/tableModals/terminalUpdateDetails';
import UpdateTerminalUpdate from './components/tableModals/updateTerminalUpdateDetails';

require("babel-core/register");
require("babel-polyfill");

const Terminals = () => 
{
const API = 'https://api-ms-test.direct4.me/terminals-admin';
const API_KEY = 'ZiJHJ7XKkEQhsy4o';
return (

    <div className="App" data-testid="appRootDiv">
     <RenderTable secret={API_KEY} api={API}/>
    <h2>New firmware</h2><br/>
      <NewFirmware secret={API_KEY} api={API} />
     <br/><p>--------------------------------------------</p><br/>
     <h2>Update firmware</h2><br/>
     <UpdateFirmware secret={API_KEY} api={API} />
     <br/><p>--------------------------------------------</p><br/>
     <h2>Get by id</h2><br/>
    <FirmwareById secret={API_KEY} api={API} />
    <h2>Downloads</h2><br/>
    <InitialDataByFirmwareId secret={API_KEY} api={API}/>
    <UpdateDataByFirmwareId secret={API_KEY} api={API}/>
    <h2>Delete</h2><br/>
    <DeleteFirmware secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Update firmware data</h2><br/>
    <UpdateFirmwareData secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Create terminal update</h2><br/>
    <NewFirmwareUpdate secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Get info on terminal updates</h2><br/>
    <TerminalUpdateByFirmwareId secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Get details on terminal updates</h2><br/>
    <TerminalUpdateDetails secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Update terminal updates</h2><br/>
    <UpdateTerminalUpdate secret={API_KEY} api={API}/>
  </div>

);

}
export default Terminals;

ReactDOM.render(<Terminals />, document.getElementById("app"));



  {/*<div className="App" data-testid="appRootDiv">
      
     <RenderTable secret={API_KEY} api={API}/>
    <h2>New firmware</h2><br/>
     <NewFirmware secret={API_KEY} api={API} />
     <br/><p>--------------------------------------------</p><br/>
     <h2>Update firmware</h2><br/>
     <UpdateFirmware secret={API_KEY} api={API} />
     <br/><p>--------------------------------------------</p><br/>
     <h2>Get by id</h2><br/>
    <FirmwareById secret={API_KEY} api={API} />
    <h2>Downloads</h2><br/>
    <InitialDataByFirmwareId secret={API_KEY} api={API}/>
    <UpdateDataByFirmwareId secret={API_KEY} api={API}/>
    <h2>Delete</h2><br/>
    <DeleteFirmware secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Update firmware data</h2><br/>
    <UpdateFirmwareData secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Create terminal update</h2><br/>
    <NewFirmwareUpdate secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Get info on terminal updates</h2><br/>
    <TerminalUpdateByFirmwareId secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Get details on terminal updates</h2><br/>
    <TerminalUpdateDetails secret={API_KEY} api={API}/>
    <br/><p>--------------------------------------------</p><br/>
    <h2>Update terminal updates</h2><br/>
    <UpdateTerminalUpdate secret={API_KEY} api={API}/> 
  </div>*/}