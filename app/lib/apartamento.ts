export interface Apartamento {
  id: string;
  nombre: string;
  planta: string;
  precio: string;
  capacidad: number;
  metros: number;
  habitaciones: number;
  banos: number;
  descripcion: string;
  imagen: string;
  imagenes: string[];
  amenities: string[];
  orientacion: string;
  disponible: boolean;
}

export const apartamento: Apartamento = {
  id: "1a",
  nombre: "Apartamento 1A",
  planta: "Primera planta",
  precio: "Consultar",
  capacidad: 3,
  metros: 40,
  habitaciones: 1,
  banos: 1,
  descripcion:
    "Apartamento de 40m² con orientación sur, 1 habitación, 1 baño, salón-cocina-comedor integrado. Equipado con vitrocerámica, horno, nevera, lavadora y aire acondicionado. Terraza privada. Destinado a alquiler vacacional.",
  imagen: "/images/1a/1a_1.jpg",
  imagenes: [
    "/images/1a/1a_1.jpg",
    "/images/1a/1a_2.jpg",
    "/images/1a/1a_3.jpg",
    "/images/1a/1a_4.jpg",
    "/images/1a/1a_5.jpg",
    "/images/1a/1a_6.jpg",
    "/images/1a/1a_7.jpg",
    "/images/1a/1a_8.jpg",
  ],
  amenities: ["vitrocerámica", "horno", "nevera", "lavadora", "aire acondicionado", "terraza"],
  orientacion: "sur",
  disponible: true,
};