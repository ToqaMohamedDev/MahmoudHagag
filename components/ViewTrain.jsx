"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, forwardRef } from "react";
import { Center, Environment, View } from "@react-three/drei";
import OpjectModel from "./OpjectModel";

const ViewTrain = forwardRef(({}, ref) => {
  return (
    <div className='h-screen w-full' >
      <Canvas 
      style={{ pointerEvents: 'none' }}
      gl={{ antialias: true }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <Center>
           <OpjectModel/>
           <Environment files="/hdr/field.hdr" environmentIntensity={1} />
           <View.Port />
        </Center>
      </Suspense>
    </Canvas>
    </div>
  );
});


export default ViewTrain;
