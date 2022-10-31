import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaVuejs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiSqlite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaAws } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Python", img: SiPython },
  { title: "Django", img: DiDjango },
  { title: "MongoDB", img: SiMongodb },
  { title: "SQL", img: GrMysql },
  { title: "Sqlite", img: SiSqlite },
  { title: "PHP", img: SiPhp },
  { title: "Amazon Web Services", img: FaAws },
];
