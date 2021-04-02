import React, { useState } from 'react';

import { Talent } from '../../../data/talents/Classes';
import Tooltip from './tooltip';
import styles from './cell.module.css';

interface CellProps {
  cellData: Talent;
  // Talent | ActiveTalent
  i: number;
  x: number;
  y: number;
  color: string | null;
  clickHandler: (i: number, x: number, y: number, e: React.MouseEvent<HTMLElement>) => void;
}

const Cell: React.FC<CellProps> = ({ cellData, i, x, y, color, clickHandler }) => {
  const [showTooltip, set_showTooltip] = useState<boolean>(false);

  return (
    <div className={styles.cellWrapper}>
      <div
        style={{
          backgroundImage: `url("/img/icons/${cellData.icon}.jpg")`,
          filter: !color ? 'grayscale(100%)' : 'none',
          border: color ? `2px solid ${color}` : 'none',
        }}
        className={styles.cellStyle}
      >
        <button
          className={styles.cellButtonStyle}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            clickHandler(i, x, y, e);
          }}
          onContextMenu={(e: React.MouseEvent<HTMLElement>) => {
            clickHandler(i, x, y, e);
          }}
          onMouseEnter={() => {
            set_showTooltip(true);
          }}
          onMouseLeave={() => {
            set_showTooltip(false);
          }}
        >
          <span className={styles.cellPointsStyle} style={{ color: color ? 'white' : '#787878' }}>
            {cellData.value}
          </span>
        </button>
        {showTooltip && <Tooltip value={cellData.value} description={cellData.description} />}
      </div>
    </div>
  );
};

export default Cell;
