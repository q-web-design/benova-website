import React from "react";
import Title from "../components/text/title";
import Paragraph from "../components/text/paragraph";
import Image from "next/image";
import Input from "../components/inputs/input";
import Textarea from "../components/inputs/textarea";
import Button from "../components/buttons/button";

export default function Contact() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto lg:flex ">
        {/* Linker deel */}
        <div className="lg:w-1/2 lg:h-screens">
          <div className="px-8 py-20 lg:h-1/2 lg:flex lg:flex-col lg:justify-center">
            <Title>Contacteer ons</Title>
            <Paragraph>
              Een vraag over Benova? Een vraag over een van onze listings? <br/>
              Wij horen het graag van u!
            </Paragraph>
          </div>
          <div className="px-8 py-14 bg-gray-50 lg:h-1/2 lg:flex">
            <div className="space-y-5 w-1/2">
              <p className="text-xl text-primary">Breemsedijk 103</p>
              <p className="text-xl text-primary">2440 Vosselaar</p>
              <p className="text-xl text-primary">België</p>
              <p className="text-xl text-primary">+32 475 92 01 72</p>
            </div>
            {/* Knop */}
            <div className="relative w-1/2">
              <Image src="/map.png" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
        {/* Rechter Deel  */}
        <div className="bg-primary px-8 py-14 lg:w-1/2 lg:h-screen lg:flex lg:items-center">
          <div className="w-full space-y-5">
            <Input label="Naam" />
            <Input label="Email" />
            <Textarea label="Comments" />
            <Button text="Contacteer ons" />
          </div>
        </div>
      </div>
    </div>
  );
}
