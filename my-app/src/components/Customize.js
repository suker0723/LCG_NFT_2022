import React, { useState } from 'react';
import { Divider, Select,Radio,Button,Card} from 'antd';
const { Meta } = Card;


const options = [
  { label: 'Male', value: 1 },
  { label: 'Female', value: 2 },
];

export function Customize({SetCustomizeParams,
  CustomizeIndex,
  CustomizeImage,
  CustomizeAttributes,
  CustomizeBackground}){
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(2);
const [value2, setValue2] = useState(1);
const [value3, setValue3] = useState(25);
const [value4, setValue4] = useState(0);
const [value5, setValue5] = useState(14);
const [value6, setValue6] = useState(3);
const [value7, setValue7] = useState(6);
const [value8, setValue8] = useState(6);
  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onClickButton = () => {
    console.log(value1,value2,value3,value4,value5,value6,value7,value8);
    SetCustomizeParams(value1,value2,value3,value4,value5,value6,value7,value8);
  };
  const handleChange1 = (value) => {
    console.log(`selected ${value}`);
    setValue1(value);
  };
  const handleChange2 = (value) => {
    console.log(`selected ${value}`);
    setValue2(value);
  };
  const handleChange3 = (value) => {
    console.log(`selected ${value}`);
    setValue3(value);
  };
  const handleChange4 = (value) => {
    console.log(`selected ${value}`);
    setValue4(value);
  };
  const handleChange5 = (value) => {
    console.log(`selected ${value}`);
    setValue5(value);
  };
  const handleChange6 = (value) => {
    console.log(`selected ${value}`);
    setValue6(value);
  };
  const handleChange7 = (value) => {
    console.log(`selected ${value}`);
    setValue7(value);
  };
  const handleChange8 = (value) => {
    console.log(`selected ${value}`);
    setValue8(value);
  };
  let display;
  if(value === 1){
    display = <CustomizeMale
    handleChange1= {handleChange1}
    handleChange2= {handleChange2}
    handleChange3= {handleChange3}
    handleChange4= {handleChange4}
    handleChange5= {handleChange5}
    handleChange6= {handleChange6}
    handleChange7= {handleChange7}
    handleChange8= {handleChange8}
    />;
  }else if (value ===2){
    display = <CustomizeFemale
    handleChange1= {handleChange1}
    handleChange2= {handleChange2}
    handleChange3= {handleChange3}
    handleChange4= {handleChange4}
    handleChange5= {handleChange5}
    handleChange6= {handleChange6}
    handleChange7= {handleChange7}
    handleChange8= {handleChange8}/>;
  }
  return (
    <div>
      <Radio.Group options={options} onChange={onChangeRadio} value={value} optionType="button" />
      <Divider/>
      {display}
      <div style={{ marginTop: 20 }}><Button type="primary" onClick={onClickButton}>Find NFT and load it</Button></div>
      
      This process may takes sometime due to waiting time of transaction to contract.
        <Divider/>
      
        <Card style={{ width: '240px' }} cover={<div style={{backgroundColor: CustomizeBackground, width: '240px', height: '240px',}} dangerouslySetInnerHTML={{__html:CustomizeImage}}/>} bordered={false}>
        <Meta title={CustomizeIndex} description={CustomizeAttributes} />
        </Card>
        
    </div>
    
  )
}

const CustomizeMale =({handleChange1,handleChange2,handleChange3,handleChange4,handleChange5,handleChange6,handleChange7,handleChange8})=>  {
  
  return (<>
    <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Background"
   onChange={handleChange1}
   options={[
     {
       value: '0',
       label: 'Red',
     },
     {
       value: '1',
       label: 'Purple',
     },
     {
       value: '2',
       label: 'Blue',
     },
   ]}
 />
   <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Archetype"
   onChange={handleChange2}
   options={[
     {
       value: '1',
       label: 'Male 1',
     },
     {
       value: '2',
       label: 'Male 2',
     },
     {
       value: '3',
       label: 'Male 3',
     },
     {
       value: '4',
       label: 'Male 4',
     },
     {
       value: '9',
       label: 'Zombie',
     },
     {
       value: '10',
       label: 'Ape',
     },
     {
       value: '11',
       label: 'Alien',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Hair"
   onChange={handleChange3}
   options={[
     {
       value: '0',
       label: 'Clown Hair Green',
     },
     {
       value: '1',
       label: 'Purple Hair',
     },
     {
       value: '2',
       label: 'Wild Hair',
     },
     {
       value: '3',
       label: 'Frumpy Hair',
     },
     {
       value: '4',
       label: 'Crazy Hair',
     },
     {
       value: '5',
       label: 'Vampire Hair',
     },
     {
       value: '6',
       label: 'Messy Hair',
     },
     {
       value: '7',
       label: 'Stringy Hair',
     },
     {
       value: '8',
       label: 'Mohawk Dark',
     },
     {
       value: '9',
       label: 'Mohawk Thin',
     },
     {
       value: '10',
       label: 'Mohawk',
     },
     {
       value: '11',
       label: 'Clown Eyes Blue',
     },
     {
       value: '12',
       label: 'Cap Forward',
     },
     {
       value: '13',
       label: 'Cap',
     },
     {
       value: '14',
       label: 'Police Cap',
     },
     {
       value: '15',
       label: 'Cowboy Hat',
     },
     {
       value: '16',
       label: 'Top Hat',
     },
     {
       value: '17',
       label: 'Bandana',
     },
     {
       value: '18',
       label: 'Fedora',
     },
     {
       value: '19',
       label: 'Headband',
     },
     {
       value: '20',
       label: 'Shaved Head',
     },
     {
       value: '21',
       label: 'Beanie',
     },
     {
       value: '22',
       label: 'Do-rag',
     },
     {
       value: '23',
       label: 'Peak Spike',
     },
     {
       value: '24',
       label: 'Hoodie',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Beard"
   onChange={handleChange4}   
   options={[
     {
       value: '0',
       label: 'Luxurious Beard',
     },
     {
       value: '1',
       label: 'Shadow Beard',
     },
     {
       value: '2',
       label: 'Beard Black',
     },
     {
       value: '3',
       label: 'Normal Beard',
     },
     {
       value: '4',
       label: 'Front Beard',
     },
     {
       value: '5',
       label: 'Big Beard',
     },
     {
       value: '6',
       label: 'Front Beard Dark',
     },
     {
       value: '7',
       label: 'Chinstrap',
     },
     {
       value: '8',
       label: 'Muttonchops',
     },
     {
       value: '9',
       label: 'Mustache',
     },
     {
       value: '10',
       label: 'Goat',
     },
     {
       value: '11',
       label: 'Handlebars',
     },
   ]}
 />
 <Divider/>
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Eyes"
   onChange={handleChange5}
   options={[
     {
       value: '0',
       label: 'Regular Shades',
     },
     {
       value: '1',
       label: 'Small Shades',
     },
     {
       value: '2',
       label: 'Classic Shades',
     },
     {
       value: '3',
       label: 'Big Shades',
     },
     {
       value: '4',
       label: 'Nerd Glasses',
     },
     {
       value: '5',
       label: 'Horned Rim Glasses',
     },
     {
       value: '6',
       label: '3D Glasses',
     },
     {
       value: '7',
       label: 'VR',
     },
     {
       value: '8',
       label: 'Eye Mask',
     },
     {
       value: '9',
       label: 'Eye Patch',
     },
     {
       value: '10',
       label: 'Clown Eyes Green',
     },
     {
       value: '11',
       label: 'Clown Eyes Blue',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Cheeks"
   onChange={handleChange6}
   options={[
     {
       value: '0',
       label: 'Rosy Cheeks',
     },
     {
       value: '1',
       label: 'Mole',
     },
     {
       value: '2',
       label: 'Spots',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Mouth"
   onChange={handleChange7}
   options={[
     {
       value: '0',
       label: 'Buck Teeth',
     },
     {
       value: '1',
       label: 'Smile',
     },
     {
       value: '2',
       label: 'Big Shades',
     },
     {
       value: '3',
       label: 'Cigarette',
     },
     {
       value: '4',
       label: 'Pipe',
     },
     {
       value: '5',
       label: 'Vape',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Others"
   onChange={handleChange8}
   options={[
     {
       value: '0',
       label: 'Silver Chain',
     },
     {
       value: '1',
       label: 'Gold Chain',
     },
     {
       value: '2',
       label: 'Earring',
     },
     {
       value: '3',
       label: 'Clown Nose',
     },
     {
       value: '4',
       label: 'Medical Mask',
     },
   ]}
 />
 </>);
  
  };


function CustomizeFemale (handleChange1,handleChange2,handleChange3,handleChange4,handleChange5,handleChange6,handleChange7,handleChange8) {
  

  return(<>
    <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Background"
   onChange={handleChange1}
   options={[
     {
       value: '0',
       label: 'Red',
     },
     {
       value: '1',
       label: 'Purple',
     },
     {
       value: '2',
       label: 'Blue',
     },
   ]}
 />
   <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Archetype"
   onChange={handleChange2}
   options={[
     {
       value: '5',
       label: 'Female 1',
     },
     {
       value: '6',
       label: 'Female 2',
     },
     {
       value: '7',
       label: 'Female 3',
     },
     {
       value: '8',
       label: 'Female 4',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Hair"
   onChange={handleChange3}      
   options={[
     {
       value: '0',
       label: 'Clown Hair Green',
     },
     {
       value: '1',
       label: 'Wild Hair',
     },
     {
       value: '2',
       label: 'Frumpy Hair',
     },
     {
       value: '3',
       label: 'Crazy Hair',
     },
     {
       value: '4',
       label: 'Messy Hair',
     },
     {
       value: '5',
       label: 'Stringy Hair',
     },
     {
       value: '6',
       label: 'Straight Hair Dark',
     },
     {
       value: '7',
       label: 'Wild White Hair',
     },
     {
       value: '8',
       label: 'Dark Hair',
     },
     {
       value: '9',
       label: 'Straight Hair',
     },
     {
       value: '10',
       label: 'Mohawk Dark',
     },
     {
       value: '11',
       label: 'Red Mohawk',
     },
     {
       value: '12',
       label: 'Mohawk Thin',
     },
     {
       value: '13',
       label: 'Mohawk',
     },
     {
       value: '14',
       label: 'Pilot Helmet',
     },
     {
       value: '15',
       label: 'Tiara',
     },
     {
       value: '16',
       label: 'Orange Side',
     },
     {
       value: '17',
       label: 'Cap',
     },
     {
       value: '18',
       label: 'Knitted Cap',
     },
     {
       value: '19',
       label: 'Tassle Hat',
     },
     {
       value: '20',
       label: 'Pink With Hat',
     },
     {
       value: '21',
       label: 'Bandana',
     },
     {
       value: '22',
       label: 'Welding Goggles',
     },
     {
       value: '23',
       label: 'Headband',
     },
     {
       value: '24',
       label: 'Pigtails',
     },
     {
       value: '25',
       label: 'Wild Blonde',
     },
     {
       value: '26',
       label: 'Blonde Short',
     },
     {
       value: '27',
       label: 'Straight Hair Blonde',
     },
     {
       value: '28',
       label: 'Blonde Bob',
     },
     {
       value: '29',
       label: 'Half Shaved',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Beard"
   onChange={handleChange4}
   options={[
   ]}
 />
 <Divider/>
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Eyes"
   onChange={handleChange5}
   options={[
     {
       value: '0',
       label: 'Regular Shades',
     },
     {
       value: '1',
       label: 'Classic Shades',
     },
     {
       value: '2',
       label: 'Big Shades',
     },
     {
       value: '3',
       label: '3D Glasses',
     },
     {
       value: '4',
       label: 'Nerd Glasses',
     },
     {
       value: '5',
       label: 'Horned Rim Glasses',
     },
     {
       value: '6',
       label: 'VR',
     },
     {
       value: '7',
       label: 'Eye Mask',
     },
     {
       value: '8',
       label: 'Eye Patch',
     },
     {
       value: '9',
       label: 'Clown Eyes Green',
     },
     {
       value: '10',
       label: 'Clown Eyes Blue',
     },
     {
       value: '11',
       label: 'Blue Eye Shadow',
     },
     {
       value: '12',
       label: 'Purple Eye Shadow',
     },
     {
       value: '13',
       label: 'Green Eye Shadow',
     },	  
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Cheeks"
   onChange={handleChange6}
   options={[
     {
       value: '0',
       label: 'Rosy Cheeks',
     },
     {
       value: '1',
       label: 'Mole',
     },
     {
       value: '2',
       label: 'Spots',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Mouth"
   onChange={handleChange7}
   options={[
     {
       value: '0',
       label: 'Black Lipstick',
     },
     {
       value: '1',
       label: 'Purple Lipstick',
     },
     {
       value: '2',
       label: 'Hot Lipstick',
     },
     {
       value: '3',
       label: 'Cigarette',
     },
     {
       value: '4',
       label: 'Pipe',
     },
     {
       value: '5',
       label: 'Vape',
     },
   ]}
 />
 <Select
   showSearch
   allowClear
   style={{ width: 180 }}
   placeholder="Others"
   onChange={handleChange8}
   options={[
     {
       value: '0',
       label: 'Gold Chain',
     },
     {
       value: '1',
       label: 'Silver Chain',
     },
     {
       value: '2',
       label: 'Choker',
     },
     {
       value: '3',
       label: 'Earring',
     },
     {
       value: '4',
       label: 'Clown Nose',
     },
     {
       value: '5',
       label: 'Medical Mask',
     },
   ]}
 />
 </>);

  
};
