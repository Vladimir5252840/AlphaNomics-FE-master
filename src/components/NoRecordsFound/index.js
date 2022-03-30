import React from "react";
import { Empty, Button, Card } from "antd";

const NoRecordsFound = ({ title, btnText, handleClick, isNotFound = true, card = false, img }) => {
  return (
    <div>
      {card ?
        <Card>
          <Empty
            // image={img}
            description={
              isNotFound
                ?
                <span>
                  {title ? title : 'No Records  Found!'}
                </span>
                :
                title
            }
          >
            {btnText && <Button type="primary" ghost onClick={handleClick}>{btnText}</Button>}
          </Empty>
        </Card>
        :
        <Empty
          // image={img}
          description={
            isNotFound
              ?
              <span>
                {title ? title : 'No Records  Found!'}
              </span>
              :
              title
          }
        >
          {btnText && <Button type="primary" ghost onClick={handleClick}>{btnText}</Button>}
        </Empty>
      }
    </div>
  )
};

export default NoRecordsFound;