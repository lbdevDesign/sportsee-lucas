

export const CTSession = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{marginLeft : '24px'}}>
          <div>
            {payload.map((pld) => (
              <div style={{ display: "flex", padding: 4, backgroundColor :'white', color : 'black', alignItems : 'center'}}>
                <div style={{fontSize : '12px', fontWeight : '500'}}>{pld.value} min</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };

