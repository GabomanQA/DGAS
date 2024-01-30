import styled from "@emotion/styled";
import { Collapse, alpha } from "@mui/material";
import { TreeItem, treeItemClasses } from "@mui/x-tree-view/TreeItem";
import { useSpring, animated } from "@react-spring/web";
import { forwardRef } from "react";

function TransitionComponent(props) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

const CustomTreeItem = forwardRef((props, ref) => {
  return (
    <TreeItem {...props} TransitionComponent={TransitionComponent} ref={ref} />
  );
});

const StyledTreeItem = styled(CustomTreeItem)(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed black`,
  },
}));

export default StyledTreeItem;
