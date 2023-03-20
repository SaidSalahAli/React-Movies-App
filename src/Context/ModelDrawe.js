import Drawer from "rc-drawer";
import React from "react";

const ModelDrawe = ({ children, drawerOpen, closeDrawer }) => {
  return (
    <Drawer
      open={drawerOpen}
      onClose={closeDrawer}
      level={null}
      handler={false}
      placement="right">
      {children}
    </Drawer>
  );
};

export default ModelDrawe;
