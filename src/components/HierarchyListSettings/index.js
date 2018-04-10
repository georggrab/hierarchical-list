// @flow
import React from "react";
import "./HierarchyListSettings.css";

export type HierarchyListSettingsProps = {
  onExpandAllClicked: () => void,
  onCollapseAllClicked: () => void,
  onInvalidateClicked: (url: string) => void,
  invalidateUrl: string,
};

export const HierarchyListSettings = (props: HierarchyListSettingsProps) => {
  return (
    <section className="HierarchyListSettings">
      <div className="expand" onClick={props.onExpandAllClicked}>
        expand all
      </div>
      <div className="collapse" onClick={props.onCollapseAllClicked}>
        collapse all
      </div>
      <div
        className="invalidate"
        onClick={() => {
          props.onInvalidateClicked(props.invalidateUrl);
        }}
      >
        invalidate
      </div>
    </section>
  );
};

export default HierarchyListSettings;
