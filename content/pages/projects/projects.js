import React from 'react';
import styled from "styled-components"

export const SectionStyled = styled.div`
  margin: 20px 0 60px 0;
  padding: 0 20px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 5px #aeaeae80;

  .title {
    border-bottom: 2px solid #dfdfdf;
    margin-bottom: 20px;
  }

  .date-link-section {
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .date {
      font-weight: bold;
      color: #e87d44;
      font-size: 20px;
    }
  }
`;

const projects = [
  {
    startDate: '2018-09-01',
    endData: null,
    title: 'Zuma Prototype - Unity3D',
    content: [
      'Created a sample level for the game with mechanics same as that of Zuma.',
      'This prototype project is a very good learning experience to understand tween and beizer curves.',
      'Got a chance to work with spline paths and tweening mechanics. Implenting array like datastructure and tracking the sections was a bit challenging part in this.'
    ],
    source: {
      label: 'Github Link',
      value: 'https://github.com/ngmgit/zuma-clone'
    },
    media: () => <iframe src="https://gfycat.com/ifr/PotableActualHerald" width="480px" height="320px" frameBorder="0" allowFullScreen=""></iframe>
  },
  {
    startDate: '2018-09-15',
    endData: null,
    title: '2D Grid movement(prototype)',
    content: [
      'Worked on a pacman like game in Unity3D.',
      'Implented node based movement. Additionally touch based controlled are added with android support.',
      'Checkout the release section in the github repo to test it.'  
    ],
    source: {
      label: 'Github Link',
      value: 'https://github.com/ngmgit/2d-grid'
    },
    media: () => <iframe src="https://gfycat.com/ifr/AcclaimedDapperBass" width="480px" height="320px" frameBorder="0" allowFullScreen=""></iframe>
  },
  {
    startDate: '2018-07-01',
    endData: null,
    title: '2D Platformer in Unity3D',
    content: [
      'A 2d platformer created using Unity3D.',
      'This project gave a good overview of necessary knowledge one should know to create a 2d game.',
      'Concepts like tile maps, colliders, animation, animator(state machine) , ray casting, camera bounds etc. Also a good understanding of how a simple AI in a typical 2d platformer works. Added touch controls to make it playable on mobile.'  
    ],
    source: {
      label: 'Github Link',
      value: 'https://github.com/ngmgit/platformer-2d'
    },
    media: () => <iframe src="https://gfycat.com/ifr/OffbeatGlaringAcornwoodpecker" width="480px" height="320px" frameBorder="0" allowFullScreen=""></iframe>
  },
  {
    startDate: '2018-07-15',
    endData: null,
    title: '3D Topdown Shooter in Unity3D',
    content: [
      'A zombie survival top down shooter game i created to understand the 3D concepts of Unity3D.',
      'Usage of Mechanim system to setup the animation transitions for user inputs.',
      'A state machine for NPC. StateBehaviour scripts for zombie NPC were implement for actions such as wander, chase and attack.',
      'NavMesh to create traversal space for the NPCS.',
      'Setup NavMeshAgent for NPC and access it via script to handle its movement based on its state.',
      'Usage of Animation Events to execute required code.'
    ],
    source: {
      label: 'Github Link',
      value: 'https://github.com/ngmgit/3d-topdownshooter'
    },
    media: () => <iframe src="https://gfycat.com/ifr/OfficialIdealEarwig" width="480px" height="320px" frameBorder="0" allowFullScreen=""></iframe>
  },
  {
    startDate: '2017-09-01',
    endData: '2017-12-15',
    title: 'Zombie Game - C++/OpenGL/SDL2',
    content: [
      'Adapted and maintained a existing C++/OpenGL/SDL2 based project to learn the Game programming concepts at low level.',
      'Experience with the State Machine nature of OpenGL.',
      'Understand the render pipeline at the low level.',
      'Configured CMake to target the Linux platform.',
    ],
    source: {
      label: 'Github Link',
      value: 'https://github.com/ngmgit/sdl2-dev-tut'
    },
    media: () => null
  },
]

export default projects;
