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
        "El bordado en punto de cruz existe desde tiempos remotos, en Lilia 's Bordados consideramos que este tipo de bordado es un clásico que brinda un estilo personalizado ya que a partir de sus puntadas diagonales le da un toque de elegancia y distinción.  Para su creación se hace una selección ardua de los materiales que vamos a utilizar y de  esta manera aseguramos la durabilidad de la prenda. Con este tipo de bordado tienes en tus manos una pizca de historia cultural que tiene como enfoque realzar y estilizar la belleza de tu hogar.",
      routerLink: "productos/bordadopuntodecruz",
    },
    {
      src: "https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640",
      alt: "imagen test",
      title: "Bordados a maquina",
      description:
        "El Bordado a máquina le da realce, belleza y originalidad a tu estilo, gracias a la gran trayectoria de nuestra diseñadora te brindamos estilos ùnicos en el mercado, este tipo de bordado se característica por la calidad de la tela  las puntadas precisas y correcta combinación de colores que hacen del diseño ùnico, limitado y especial con formas que destaquen tu personalidad. Al adquirir nuestros productos te proporcionamos una sensación especial pues realzan la belleza de tu hogar",
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
        "Lilias Bordados es  un lugar que te transporta  a recordar momentos únicos e inolvidables. Al adquirir nuestros productos la elegancia y delicadeza forman parte de tu hogar, para su elaboración se requiere de habilidad y creatividad. Nuestra diseñadora cuenta con más de 15 años de experiencia, lo que garantiza  la tècnica y durabilidad en los diseños, cuya definición se realza por su calidad de puntadas y la belleza de sus colores que son elaborados a partir de términos, números, mediciones y con material que aporta un excelente brillo y suavidad a la prenda. Ven y forma parte del mundo del bordado.",
      routerLink: "atumedida",
    },
    {
      imgPosition: "rigth",
      src: "https://unsplash.com/photos/5hvn-2WW6rY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzNTA5ODkz&force=true&w=640",
      alt: "foto del negocio",
      title: "Nosotros",
      description:
        "Lilias Bordados te ofrece diseños de alta calidad, todos son elaborados a partir de la creatividad e ingenio de nuestra diseñadora que siempre busca la manera de resaltar  nuestros productos con materiales que ayuden a mantener la firmeza y belleza del modelo.",
      routerLink: "nosotros",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
