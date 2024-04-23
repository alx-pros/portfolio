import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_3: THREE.Mesh;
  };
  materials: {};
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("/scene.gltf") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, -Math.PI]} scale={[-0.1, 0.1, 0.1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_1.geometry}
          material={nodes.mesh_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_2.geometry}
          material={nodes.mesh_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_3.geometry}
          material={nodes.mesh_3.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");