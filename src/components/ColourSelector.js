import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <>
    <button className="fix-box" onClick={() => selectNextBackground({ background: background })}>
      Blue
    </button><button className="fix-box" onClick={() => selectNextBackground({ background: background })}>
        Orange
      </button><button className="fix-box" onClick={() => selectNextBackground({ background: background })}>
        Green
      </button>
      </>
  )
}
export default ColourSelector;
