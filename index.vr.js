import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  Model,
  moon,
} from 'react-vr';

export default class SpaceVR extends React.Component {
constructor(){
  super();
  this.state={rotation:130};
  this.rotate=this.rotate.bind(this)
}
componentDidMount(){
  this.rotate();
}
rotate(){
  this.setState(state=>({rotation:state.rotation+1}))
  this.rotationHandler=requestAnimationFrame(this.rotate);
}




  render() {
    return (
      <View>
        <Pano source={{
          uri:[
            '../static_assets/space_right.png',
            '../static_assets/space_right.png',
            '../static_assets/space_up.png',
            '../static_assets/space_down.png',
            '../static_assets/space_back.png',
            '../static_assets/space_front.png',
          ]
        }}/>
    <AmbientLight intensity={2.6}/>
    <Model
      style={{
        transform:[
          {translate:[10,10,-100]},
            {scale: 0.05},
                {rotateY:this.state.rotation/3},
          ]
        }}
        source={{obj:asset('moon.obj'), mtl:asset('moon.mtl')}}
        lit={true}
        />
        <Model
        style={{
          transform:[
            {translate:[-25,0,-70]},
            {scale:0.05},
            {rotateY:this.state.rotation},
            {rotateX:20},
            {rotateZ:-10}
          ]
        }}
        source={{obj:asset('earth.obj'),mtl:asset('earth.mtl')}}
        lit={true}
        />

      <Text
        style={{
          backgroundColor: '#777879',
          fontSize: 0.8,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, 3]}],
        }}>
          hello
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('SpaceVR', () => SpaceVR);
