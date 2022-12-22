import React, {useState} from 'react';
import { InputNumber,Divider,Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';




export function Search  ({getIndexInfo, SVGImage,SVGAttributes, SVGBackground}) {
    const [value, setValue] = useState('1001');
    
    return(<div
        className="site-layout-content"
        style={{
          padding: '10px',
        }}
      >
          Search your NFT by Index
          <div style={{ marginTop: 15 }}><InputNumber min={1} max={0xffffffff}  value={value} onChange={setValue}/></div>
        
        <div style={{ marginTop: 20 }}>
            
        <Button type="primary" icon={<SearchOutlined />} onClick = {()=>{getIndexInfo(value)}}>
            Search
          </Button>
          </div>
          This process may takes sometime due to waiting time of transaction to contract.
        <Divider/>

        <div style={{backgroundColor: SVGBackground, width: '240px', height: '240px',}} dangerouslySetInnerHTML={{__html:SVGImage}}>
        </div>

        <div style={{float: 'none', display: 'table', margin: '0', marginTop: '16px',marginBottom: '16px'}}>
            <p style={{fontWeight: 'bold'}}>{SVGAttributes}</p>
        </div>
        
      </div>);
}
    

        
        


