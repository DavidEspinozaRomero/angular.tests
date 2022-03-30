import { Component, OnInit } from "@angular/core";
import { Card } from "../../interfaces/interfaces";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  list: Card[] = [
    {
      src: "https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640",
      alt: "bordado punto de cruz de perro",
      title: "Bordado punto de cruz",
      description:
        "El bordado en punto de cruz es un clásico que brinda un estilo personalizado ya que a partir de sus puntadas diagonales le da un toque de elegancia y distinción al modelo. Con este tipo de bordado tienes en tus manos una pizca de historia cultural que tiene como enfoque realzar y estilizar la belleza de tu hogar.",
      routerLink: "productos/bordadopuntodecruz",
    },
    {
      src: "https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640",
      alt: "imagen test",
      title: "Bordados a maquina",
      description:
        "El Bordado a màquina le da realce, belleza y originalidad a tu estilo, gracias a la gran trayectoria de nuestra diseñadora al adquirir nuestros productos te proporcionamos una sensación especial pues tenemos bordados cuya característica es la calidad de la tela  las puntadas precisas y correcta combinación de colores que  realzan la belleza de tu hogar.",
      routerLink: "/productos/bordadoamaquina",
    },
    {
      src: "https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640",
      alt: "bordado a mano de gatito",
      title: "Bordados a Mano",
      description:
        "La creatividad, perseverancia y entusiasmo se reflejan en los bordados a mano que te ofrece lilias bordados te invito a que conozcas nuestros productos y disfrutes de una infinidad de modelos  que te presentamos.",
      routerLink: "/productos/bordadoamano",
    },
  ];

  cardlrlist: Card[] = [
    {
      imgPosition: "left",
      src: "https://unsplash.com/photos/5hvn-2WW6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzNTA5ODkz&force=true&w=640",
      alt: "foto de mujer puesta ropa con bordados",
      title: "Bordados a tu medida",
      description:
        "Lilias Bordados te ofrece diseños de alta calidad. Al adquirir nuestros bordados la elegancia y delicadeza forman parte de tu hogar gracias a  la calidad de sus puntadas y la belleza de sus colores con una  técnica y durabilidad incomparables. Ven y forma parte del mundo del bordado.",
      routerLink: "atumedida",
    },
    {
      imgPosition: "rigth",
      src: "https://unsplash.com/photos/5hvn-2WW6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzNTA5ODkz&force=true&w=640",
      alt: "foto del negocio",
      title: "Nosotros",
      description:
        "Lilias Bordados es un lugar que te transporta  a recordar momentos únicos todos nuestros diseños  son elaborados con materiales que ayuden a mantener la firmeza y belleza del modelo a partir de la creatividad e ingenio de nuestra diseñadora.",
      routerLink: "nosotros",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
