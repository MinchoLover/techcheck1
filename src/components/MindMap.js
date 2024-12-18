import React from "react";
import { Tree } from "react-d3-tree";
import treeData from "../data/MainIdea.json"

const MindMap = () => {
  return (
    <div style={{ width: "100%", height: "1000px" }}>
      <Tree data={treeData} orientation="vertical" />
    </div>
  );
};

export default MindMap;