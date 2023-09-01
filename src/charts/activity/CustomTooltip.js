import { keyboard } from "@testing-library/user-event/dist/keyboard";


export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{marginLeft : '24px'}}>
          <div>
            {payload.map((pld) => (
              <div style={{ display: "flex", padding: 4, backgroundColor :'red', color : 'white', alignItems : 'center'}} key={pld.dataKey}>
                <div style={{fontSize : '12px', fontWeight : '500'}}>{pld.value}</div>
                <div style={{fontSize : '12px', fontWeight : '500'}}>{pld.dataKey}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };