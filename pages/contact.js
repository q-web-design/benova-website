import React from "react";
import Title from "../components/text/title";
import Paragraph from "../components/text/paragraph";
import Image from "next/image";
import Input from "../components/inputs/input";
import Textarea from "../components/inputs/textarea";

export default function Contact() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto">
        {/* Linker deel */}
        <div className="">
          <div className="px-8 py-20">
            <Title>Contacteer ons</Title>
            <Paragraph>
              Een vraag over Benova? Een vraag over een van onze listings? Wij
              horen het graag van u!
            </Paragraph>
          </div>
          <div className="px-8 py-14 bg-gray-50 space-y-5">
            <p className="text-xl text-primary">Breemsedijk 103</p>
            <p className="text-xl text-primary">2440 Vosselaar</p>
            <p className="text-xl text-primary">België</p>
            <p className="text-xl text-primary">+32 475 92 01 72</p>
            {/* Knop */}
            <div>
              <Image
                src="/map.png"
                layout="intrinsic"
                width="300"
                height="300"
              />
            </div>
          </div>
        </div>
        {/* Rechter Deel  */}
        <div className="bg-primary px-8 py-14 space-y-5">
            <Input label="Naam"/>
            <Input label="Email"/>
            <Textarea label="Comments"/>
        </div>
      </div>
    </div>
  );
}
