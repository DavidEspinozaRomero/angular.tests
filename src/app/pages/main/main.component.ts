import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  list: any[] = [
    {
      src: "https://unsplash.com/photos/AFR80W_pT8o/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Njl8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQzNDY4NDc3&force=true&w=640",
      alt: "bordado punto de cruz de perro",
      title: "Bordado punto de cruz",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!",
      routerLink: "productos/bordadopuntodecruz",
    },
    {
      src: "https://unsplash.com/photos/uwRt8jrjZTY/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ0NTQwNjYy&force=true&w=640",
      alt: "imagen test",
      title: "Bordados a maquina",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!",
      routerLink: "/productos/bordadoamaquina",
    },
    {
      src: "https://unsplash.com/photos/DEmEaME-8do/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NDd8fGVtYnJvaWRlcnl8ZW58MHx8fHwxNjQ0NTQwNDk0&force=true&w=640",
      alt: "bordado a mano de gatito",
      title: "Bordados a Mano",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum libero totam blanditiis! Nobis inventore, incidunt quo rerum similique corrupti adipisci ea sequi. At dolores, mollitia omnis totam hic sequi temporibus!",
      routerLink: "/productos/bordadoamano",
    },
  ];

  cardlrlist: any[] = [
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
