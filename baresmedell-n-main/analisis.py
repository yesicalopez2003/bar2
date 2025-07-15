#Analizando los datos de registro de empleado
import pandas as pd 

#cargar los datos a analizar

datosEmpleados=pd.read_csv("datos_empleados_bar.csv")
print(datosEmpleados)

#aplicando trasformaciones y filtros
#Clasificar los empleados con salario mayor a 3 millones
salariosMayoresaTres=datosEmpleados.query("`Salario (COP)`>3000000")

#obtener los empleados con más de 10 años de experiencia
empladosExperienciaDiez=datosEmpleados.query("`Experiencia (años)`>10")

#Empleados que trabajan mas de 180 horas
empleados180=datosEmpleados.query("`Horas laboradas/mes`>180")

#Empleados cuyo cargo es un Bartender
bartenders=datosEmpleados.query("`Cargo en el bar`==`Bartender`")