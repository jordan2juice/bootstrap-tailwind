"use client";

import React from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";

export default function FeatureSection() {
  return (
    <div className=" justify-center m-4">
      <h1 className=" text-center">Feature Section</h1>
      <p className="text-center">This is a simple feature section</p>

      <div className="flex grid-flow-row justify-center flex-wrap p-3">
        <Card className="w-25 m-3">
          <img
            className="object-cover h-72 w-auto"
            src="/batman.jpeg"
            alt="batman"
          />
          <CardHeader>
            <h2>Batman</h2>
          </CardHeader>
          <CardBody>
            <p>This is a simple feature section</p>
          </CardBody>
        </Card>
        <Card className="w-25 m-3">
          <img
            className="object-cover h-72 w-auto"
            src="/superman.jpeg"
            alt="superman"
          />
          <CardHeader>
            <h2>Superman</h2>
          </CardHeader>
          <CardBody>
            <p>This is a simple feature section</p>
          </CardBody>
        </Card>
        <Card className=" w-25 m-3">
          <img
            className=" object-cover h-72 w-auto"
            src="/spiderman.jpg"
            alt="spiderman"
          />
          <CardHeader>
            <h2>Spiderman</h2>
          </CardHeader>
          <CardBody>
            <p>This is a simple feature section</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
