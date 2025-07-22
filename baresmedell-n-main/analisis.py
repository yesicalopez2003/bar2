#Analizando los datos de registro de empleado
import pandas as pd 

#cargar los datos a analizar
datosEmpleados=pd.read_csv("datos_empleados_bar.csv")

#aplicando trasformaciones y filtros
#Clasificar los empleados con salario mayor a 3 millones
salariosMayoresaTres=datosEmpleados.query("`Salario (COP)`>3000000")
print(salariosMayoresaTres.head(5))
#obtener los empleados con más de 10 años de experiencia
empladosExperienciaDiez=datosEmpleados.query("`Experiencia (años)`>10")
print(empladosExperienciaDiez.head(5))
#Empleados que trabajan mas de 180 horas
empleados180=datosEmpleados.query("`Horas laboradas/mes`>180")
print(empleados180.head(5))
#Empleados cuyo cargo es un Bartender
bartenders=datosEmpleados.query("`Cargo en el bar`=='Bartender'")
print(bartenders.head(5))