import React, { Fragment } from "react";
import classes from "./Layout.module.css";

export default function Layout(props) {
  console.log(classes);
  return (
    <React.Fragment>
      <div>ToolBar, Sidebar, Backdrop</div>
      <main className={classes.content}>{props.children}</main>
    </React.Fragment>
  );
}
