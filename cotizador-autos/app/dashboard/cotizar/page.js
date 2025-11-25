"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

export default function CotizarPage() {
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    anio: "",
    cobertura: "",
    tipoVehiculo: "",
    zona: "",
    valorComercial: ""
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);

    // Aquí puedes enviar la data a tu API
  };

  return (
    <div className="p-6 flex justify-center">
      <Card className="w-full max-w-xl shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-center">
            Cotizar Seguro Vehicular
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Marca */}
            <div>
              <Label>Marca</Label>
              <Input
                value={formData.marca}
                onChange={(e) => handleChange("marca", e.target.value)}
                placeholder="Ej: Toyota"
              />
            </div>

            {/* Modelo */}
            <div>
              <Label>Modelo</Label>
              <Input
                value={formData.modelo}
                onChange={(e) => handleChange("modelo", e.target.value)}
                placeholder="Ej: Corolla"
              />
            </div>

            {/* Año */}
            <div>
              <Label>Año</Label>
              <Input
                type="number"
                value={formData.anio}
                onChange={(e) => handleChange("anio", e.target.value)}
                placeholder="2020"
              />
            </div>

            {/* Tipo de cobertura */}
            <div>
              <Label>Tipo de cobertura</Label>
              <Select onValueChange={(v) => handleChange("cobertura", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione cobertura" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo_riesgo">Todo Riesgo</SelectItem>
                  <SelectItem value="perdida_parcial">Pérdida Parcial</SelectItem>
                  <SelectItem value="perdida_total">Pérdida Total</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Tipo de vehículo */}
            <div>
              <Label>Tipo de vehículo</Label>
              <Select onValueChange={(v) => handleChange("tipoVehiculo", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="camioneta">Camioneta</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="moto">Moto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Zona del país */}
            <div>
              <Label>Zona del país</Label>
              <Select onValueChange={(v) => handleChange("zona", v)}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione zona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sierra">Sierra</SelectItem>
                  <SelectItem value="costa">Costa</SelectItem>
                  <SelectItem value="amazonia">Amazonía</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Valor comercial */}
            <div>
              <Label>Valor comercial</Label>
              <Input
                type="number"
                value={formData.valorComercial}
                onChange={(e) => handleChange("valorComercial", e.target.value)}
                placeholder="Ej: 18000"
              />
            </div>

            {/* Botón */}
            <Button className="w-full mt-3" type="submit">
              Cotizar
            </Button>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
