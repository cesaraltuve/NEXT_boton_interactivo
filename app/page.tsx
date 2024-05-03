"use client";
import Button from "./components/ui/button";
import Card from "./components/ui/card";
import WaterWaveWrapper from "./components/visualEffects/water-wave-wrapper";
import { GoHomeFill } from "react-icons/go";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "./components/ui/input";
import TextArea from "./components/ui/text-area";
import Profile from "./components/ui/profile";
import FancyButon from "./components/ui/fancy-button";
import LiveClock from "./components/ui/live-clock";
import MagnetciWrapper from "./components/visualEffects/magnetic-wrapper";
import ScrollDown from "./components/ui/scroll-down";

export default function Home() {
  return (
    <WaterWaveWrapper
    imageUrl=""
    dropRadius="3"
    perturbance="3"
    resolution="2048"
    >
      {() => (
        <div className="h-screen p-20">
          <div className="max-w-2xl mx-auto">
          <Card title="Componentes Integrados">
            <div className="grid grid-cols-4">
              <Button>Botón Básico</Button>
              <Button>
                <GoHomeFill />
                Botón Básico
              </Button>
              <Button isIcon>
                <FaUser />
              </Button>
              <Button link="https://www.google.com">Google</Button>
            </div>
            <Input type="text" placeholder="Nombre Completo" />
            <Input type="text" placeholder="Nombre Completo" icon={<FaUser />} />
            <TextArea placeholder="Nombre Completo" />
            <TextArea placeholder="Nombre Completo" icon={<FaUser />} />
            <Profile />
            <MagnetciWrapper className="w-[300px]">
            <FancyButon text="Contacto" icon={<FaArrowRight/>}/>
            </MagnetciWrapper>
            <LiveClock timeZone="America/Caracas" />
            <MagnetciWrapper className="">
              <ScrollDown />
            </MagnetciWrapper>
          </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
