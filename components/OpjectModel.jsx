"use client";
import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Leva, useControls } from "leva";
import { forwardRef, useRef,useEffect } from "react";


gsap.registerPlugin(useGSAP,ScrollTrigger);

const OpjectModel = forwardRef((props, ref) => {
  const group = useRef(null);
  const { nodes, animations,materials} = useGLTF('/drone.glb');
  const {camera,scene}= useThree();
  const tl=gsap.timeline();
  
  // const {cameraPosition,scenePosition,sceneRotation} =useControls({
  //   cameraPosition:{
  //     value:{
  //      x:0,
  //      y:0,
  //      z:5,
  //     },
  //     step:0.05,
  //   },
  //   scenePosition:{
  //     value:{
  //       x:0,
  //       y:0,
  //       z:0,
  //      },
  //      step:0.05,
  //   },
  //   sceneRotation:{
  //     value:{
  //       x:0,
  //       y:0,
  //       z:0,
  //      },
  //      step:0.05,
  //   }
  // });
  
    useGSAP(()=>{
      gsap.set(camera.position,{
        x:3,
        y:1.9,
        z:6.00,
      });
      gsap.set(scene.rotation,{
      x:.4,
      y:-1.1,
      z:1
      });

      tl.to(
      camera.position,
      {
        x:-2.45,
        z:5,
        scrollTrigger:{
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      },
    ).to(
      scene.rotation,
      {
        x:0.10,
        y:-3.70,
        scrollTrigger:{
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      }
    ).to(
      camera.position,
      {
        x:2,
        y:1.50,
        z:5.5,
        scrollTrigger:{
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      }
    ).to(
      scene.rotation,
      {
        x:.5,
        y:-1.0,
        z:1,
        scrollTrigger:{
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        }
      }
    );
      // //camera
      // console.log(camera.position.x);//0
      // console.log(camera.position.y);//0
      // console.log(camera.position.z);//5
      // //scene
      // console.log(scene.position.x);//0
      // console.log(scene.position.y);//0
      // console.log(scene.position.z);//0
      // //scene
      // console.log(scene.rotation.x);//0
      // console.log(scene.rotation.y);//0
      // console.log(scene.rotation.z);//0
    },[]);
    // useFrame(()=>{
    //   //camera
    //   camera.position.x=cameraPosition.x;
    //   camera.position.y=cameraPosition.y;
    //   camera.position.z=cameraPosition.z;
    //    //scene position
    //    scene.position.x=scenePosition.x;
    //    scene.position.y=scenePosition.y;
    //    scene.position.z=scenePosition.z;
    //    //scene Rotation
    //    scene.rotation.x=sceneRotation.x;
    //    scene.rotation.y=sceneRotation.y;
    //    scene.rotation.z=sceneRotation.z;
    // });
    return (
      <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.015}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Box001_Material_#4_0'].geometry}
            material={materials.Material_4}
            position={[0, 63.803, 0.366]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['Object002_Material_#5_0'].geometry}
            material={materials.Material_5}
            position={[0, 63.803, 0.366]}
            rotation={[0, -Math.PI / 2, 0]}
          />
        </group>
      </group>
    </group>
    );
  });

export default OpjectModel;


