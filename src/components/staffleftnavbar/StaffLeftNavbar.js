import React from "react";
import "../dasLeftNav.css";
import schLogo from "../../asset/osustech.png";
import { MdDashboard, MdMoveToInbox } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { RxReload } from "react-icons/rx";
import { BsFilePersonFill } from "react-icons/bs";
import { RiBubbleChartFill } from "react-icons/ri";
import { HiUpload } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LogoutModal from "../../pages/staff/logout/Logout";

const StaffLeftNavbar = ({ mobile, setMobile }) => {
  const dash1Style = { flexDirection: "column" };

  return (
    <div className={mobile ? "leftNav pb-5" : "swapLeftNav"}>
      <div
        onClick={() => setMobile(true)}
        style={dash1Style}
        className='d-flex over-class gap-2 ps-2 pt-3'>
        <div className='d-flex justify-content-center pe-3 pb-2'>
          <img src={schLogo} alt='schhol_image' style={{height: 60, width:60}} />
        </div>
        <CustomLink to='/dashboard'>
          <div
            id='hover'
            className='ps-3 ms-1 d-flex align-items-center rounded gap-2'
            style={{ height: "48px", width: "90%" }}>
            <MdDashboard size='25' style={{ color: "#fff" }} />
            Dashboard
          </div>
        </CustomLink>
        <CustomLink to='calender'>
          <div
            id='hover'
            className='d-flex ps-3 ms-1 align-items-center rounded gap-2'
            style={{ height: "48px", width: "90%" }}>
            <IoMdCalendar size='25' style={{ color: "#fff" }} />
            Calender & Schedule
          </div>
        </CustomLink>
        
       
       
       
        <CustomLink to='leave'>
          <div
            id='hover'
            className='ps-3 ms-1 d-flex align-items-center rounded gap-2'
            style={{ height: "48px", width: "90%" }}>
            <RxReload size='25' style={{ color: "#fff" }} />
            Leave
          </div>
        </CustomLink>
        

       
        <CustomLink to='setting'>
          <div
            id='hover'
            className='ps-3 ms-1 d-flex align-items-center rounded gap-2'
            style={{ height: "48px", width: "90%", marginTop: "0px", }}>
            <MdMoveToInbox size='25' style={{ color: "#fff" }} />
            Settings
          </div>
        </CustomLink>
        <LogoutModal/>
      </div>
    </div>
  );
  function CustomLink({ to, children, ...props }) {
    const resolvedpath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedpath.pathname, end: true });
    return (
      <div id={isActive ? "active" : ""}>
        <div className={isActive ? "ss bg-white" : "d-none"}></div>
        <Link to={to} {...props}>
          {children}
        </Link>
      </div>
    );
  }
};

export default StaffLeftNavbar;
