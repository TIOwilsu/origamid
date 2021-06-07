import React from "react";
import { findSlot } from "../../helpers/index";

const Buttons = () => null;
const Contents = () => null;

const Tabs = ({ children, index }) => {
  const buttons = findSlot(children, Buttons);
  const contents = findSlot(children, Contents);
  const [position, setPosition] = React.useState(index ? index : 0);

  const isActive = (key) => position === key;

  const click = (handler, key) => {
    if (handler) handler();
    setPosition(key);
  };

  return (
    <div className="tabs">
      <div className="tabs-buttons">
        {buttons &&
          buttons.props.children.map((button, key) => ({
            ...button,
            props: {
              ...button.props,
              onClick: () => click(button.props.handler, key),
              disabled: isActive(key),
            },
          }))}
      </div>
      {contents && (
        <div className="tabs-contents">
          {contents.props.children.length ? (
            contents.props.children.map((content, key) => (
              <div
                className="tab-content"
                style={{ display: isActive(key) ? "block" : "none" }}
                key={key}
              >
                {content}
              </div>
            ))
          ) : (
            <div className="tab-content">{contents.props.children}</div>
          )}
        </div>
      )}
    </div>
  );
};

Tabs.Buttons = Buttons;
Tabs.Contents = Contents;

export default Tabs;
