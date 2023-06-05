import {
	Box,
	Button,
	chakra,
	Flex,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
  
  interface StatsCardProps {
	title: string;
	stat: string;
  }

  const dados = [
		{	"quem":	"ninguem"	,	"quando":	"01/01/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"02/01/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"03/01/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"04/01/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"05/01/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"06/01/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"07/01/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"08/01/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"09/01/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"10/01/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"11/01/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"12/01/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"13/01/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"14/01/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"15/01/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"16/01/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"17/01/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"18/01/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"19/01/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"20/01/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"21/01/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"22/01/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"23/01/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"24/01/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"25/01/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"26/01/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"27/01/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"28/01/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"29/01/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"30/01/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"31/01/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"01/02/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"02/02/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"03/02/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"04/02/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"05/02/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"06/02/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"07/02/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"08/02/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"09/02/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"10/02/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"11/02/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"12/02/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"13/02/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"14/02/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"15/02/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"16/02/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"17/02/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"18/02/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"19/02/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"20/02/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"21/02/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"22/02/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"23/02/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"24/02/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"25/02/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"26/02/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"27/02/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"28/02/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"01/03/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"02/03/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"03/03/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"04/03/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"05/03/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"06/03/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"07/03/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"08/03/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"09/03/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"10/03/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"11/03/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"12/03/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"13/03/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"14/03/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"15/03/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"16/03/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"17/03/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"18/03/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"19/03/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"20/03/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"21/03/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"22/03/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"23/03/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"24/03/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"25/03/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"26/03/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"27/03/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"28/03/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"29/03/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"30/03/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"31/03/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"01/04/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"02/04/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"03/04/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"04/04/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"05/04/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"06/04/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"07/04/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"08/04/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"09/04/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"10/04/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"11/04/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"12/04/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"13/04/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"14/04/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"15/04/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"16/04/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"17/04/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"18/04/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"19/04/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"20/04/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"21/04/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"22/04/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"23/04/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"24/04/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"25/04/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"26/04/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"27/04/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"28/04/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"29/04/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"30/04/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"ninguem"	,	"quando":	"01/05/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"02/05/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"03/05/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"04/05/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"05/05/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"06/05/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"07/05/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"08/05/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"09/05/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"10/05/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"11/05/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"12/05/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"13/05/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"14/05/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"15/05/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"16/05/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"17/05/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"18/05/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"19/05/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"20/05/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"21/05/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"22/05/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"23/05/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"24/05/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"25/05/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"26/05/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"27/05/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"28/05/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"29/05/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"30/05/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"31/05/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"01/06/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"02/06/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"03/06/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"04/06/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"05/06/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"06/06/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"07/06/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"08/06/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"09/06/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"10/06/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"11/06/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"12/06/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"13/06/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"14/06/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"15/06/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"16/06/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"17/06/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"18/06/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"19/06/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"20/06/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"21/06/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"22/06/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"23/06/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"24/06/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"25/06/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"26/06/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"27/06/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"28/06/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"29/06/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"30/06/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"01/07/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"02/07/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"03/07/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"04/07/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"05/07/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"06/07/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"07/07/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"08/07/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"09/07/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"10/07/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"11/07/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"12/07/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"13/07/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"14/07/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"15/07/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"16/07/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"17/07/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"18/07/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"19/07/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"20/07/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"21/07/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"22/07/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"23/07/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"24/07/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"25/07/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"26/07/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"27/07/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"28/07/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"29/07/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"30/07/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"31/07/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"01/08/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"02/08/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"03/08/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"04/08/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"05/08/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"06/08/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"07/08/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"08/08/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"09/08/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"10/08/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"11/08/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"12/08/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"13/08/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"14/08/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"15/08/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"16/08/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"17/08/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"18/08/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"19/08/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"20/08/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"21/08/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"22/08/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"23/08/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"24/08/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"25/08/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"26/08/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"27/08/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"28/08/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"29/08/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"30/08/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"31/08/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"01/09/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"02/09/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"03/09/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"04/09/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"05/09/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"06/09/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"07/09/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"08/09/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"09/09/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"10/09/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"11/09/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"12/09/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"13/09/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"14/09/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"15/09/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"16/09/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"17/09/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"18/09/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"19/09/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"20/09/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"21/09/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"22/09/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"23/09/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"24/09/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"25/09/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"26/09/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"27/09/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"28/09/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"29/09/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"30/09/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"01/10/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"02/10/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"03/10/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"04/10/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"05/10/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"06/10/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"07/10/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"08/10/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"09/10/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"10/10/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"11/10/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"12/10/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"13/10/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"14/10/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"15/10/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"16/10/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"17/10/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"18/10/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"19/10/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"20/10/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"21/10/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"22/10/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"23/10/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"24/10/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"25/10/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"26/10/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"27/10/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"28/10/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"29/10/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"30/10/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"31/10/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"01/11/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"02/11/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"03/11/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"04/11/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"05/11/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"06/11/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"07/11/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"08/11/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"09/11/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"10/11/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"11/11/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"12/11/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"13/11/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"14/11/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"15/11/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"16/11/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"17/11/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"18/11/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"19/11/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"20/11/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"21/11/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"22/11/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"23/11/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"24/11/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"25/11/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"26/11/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"27/11/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"28/11/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"29/11/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"30/11/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"01/12/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"02/12/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"03/12/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"04/12/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"05/12/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"06/12/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"07/12/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"08/12/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"09/12/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"10/12/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"11/12/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"12/12/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"13/12/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"14/12/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"15/12/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"16/12/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"17/12/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"18/12/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"19/12/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"20/12/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"21/12/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"22/12/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"23/12/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"24/12/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"ninguem"	,	"quando":	"25/12/2023"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"26/12/2023"	,	"dsemana":	"terça-feira"	},
		{	"quem":	"Departamento Pessoal"	,	"quando":	"27/12/2023"	,	"dsemana":	"quarta-feira"	},
		{	"quem":	"Departamento Contabil"	,	"quando":	"28/12/2023"	,	"dsemana":	"quinta-feira"	},
		{	"quem":	"Departamento Fiscal"	,	"quando":	"29/12/2023"	,	"dsemana":	"sexta-feira"	},
		{	"quem":	"ninguem"	,	"quando":	"30/12/2023"	,	"dsemana":	"sábado"	},
		{	"quem":	"ninguem"	,	"quando":	"31/12/2023"	,	"dsemana":	"domingo"	},
		{	"quem":	"ninguem?"	,	"quando":	"01/01/2024"	,	"dsemana":	"segunda-feira"	},
		{	"quem":	"Demais Departamentos"	,	"quando":	"02/01/2024"	,	"dsemana":	"terça-feira"	},		
	]
function StatsCard(props: any) {
	const { title, stat } = props;
	const backgrounds = [
		`url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
	];
	const borderColor:any = useColorModeValue('gray.800', 'gray.500')
	const bgColor:any = useColorModeValue('white', 'gray.800')
	return(
		<>
			{
				props.hoje == true && (
					<Stat
						px={{ base: 4, md: 8 }}
						py={'5'}
						shadow={'xl'}
						border={'1px solid'}
						borderColor={borderColor}
						rounded={'lg'}
						_after={{
							content: '""',
							position: 'absolute',
							height: '21px',
							width: '29px',
							left: '35px',
							top: '-10px',
							backgroundSize: 'cover',
							backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
						}}
						_before={{
							content: '""',
							position: 'absolute',
							zIndex: '-1',
							height: 'full',
							maxW: '640px',
							width: 'full',
							filter: 'blur(40px)',
							transform: 'scale(0.98)',
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							top: 0,
							left: 0,
							backgroundImage: backgrounds[Math.floor(Math.random() * 4)],
						}}
						bg={bgColor}
					>
						<StatLabel fontWeight={'medium'} isTruncated>
							{title}
						</StatLabel>
						<StatNumber fontSize={'2xl'} fontWeight={'medium'}>
							{stat}
						</StatNumber>
					</Stat>
				)
			}

			{
				props.hoje == false && (
					<Stat
					opacity={0.5}
						px={{ base: 4, md: 8 }}
						py={'5'}
						shadow={'xl'}
						border={'1px solid'}
						borderColor={borderColor}
						rounded={'lg'}
						
						_after={{
							content: '""',
							position: 'absolute',
							height: '21px',
							width: '29px',
							left: '35px',
							top: '-10px',
							backgroundSize: 'cover',
							backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
						}}
						bg={bgColor}
					>
						<StatLabel fontWeight={'medium'} isTruncated>
							{title}
						</StatLabel>
						<StatNumber fontSize={'2xl'} fontWeight={'medium'}>
							{stat}
						</StatNumber>
					</Stat>
				)
			}
		</>
	)
  }

  
  export function Initial(props:any) {
	const [ atendeOntem, setAtendeOntem ] = useState<any>({})
	const [ atendeHoje, setAtendeHoje ] = useState<any>({})
	const [ atendeAmanha, setAtendeAmanha ] = useState<any>({})
	const [ pagina, setPagina ] = useState<any>(0)

	async function regraPraAtender() {
		function adicionaZero(numero:any){
			if (numero <= 9) 
				return "0" + numero;
			else
				return numero; 
		}
		let dataAtual = new Date(new Date().getTime() + ((pagina) * 24 * 60 * 60 * 1000));
		let dataOntemFormatada = (adicionaZero((dataAtual.getDate()-1).toString()) + "/" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "/" + dataAtual.getFullYear());
		let dataAtualFormatada = (adicionaZero((dataAtual.getDate()).toString()) + "/" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "/" + dataAtual.getFullYear());
		let dataAmanhaFormatada = (adicionaZero((dataAtual.getDate()+1).toString()) + "/" + (adicionaZero(dataAtual.getMonth()+1).toString()) + "/" + dataAtual.getFullYear());
		console.log(dataAtualFormatada);
		// saída: 00/00/0000
		
		dados.map((dados)=>{
			if(dados.quando==dataOntemFormatada){
				console.log("ontem o " + dados.quem + " atendeu")
				console.log(dados)
				setAtendeOntem(dados)
			}

			if(dados.quando==dataAtualFormatada){
				console.log("hoje o " + dados.quem + " atende")
				console.log(dados)
				setAtendeHoje(dados)
			}

			if(dados.quando==dataAmanhaFormatada){
				console.log("amanhã o " + dados.quem + " atenderá")
				console.log(dados)
				setAtendeAmanha(dados)
			}
		})
		return 'success'
	}
	useEffect(()=>{
		regraPraAtender()
	},[pagina])
	  return (
	  <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
			<ColorModeSwitcher/>
			<chakra.h1
				textAlign={'center'}
				fontSize={'4xl'}
				py={10}
				fontWeight={'bold'}>
				Quem atende hoje?
			</chakra.h1>

			<Box display="block-flex">

			<Button p="3rem 0" onClick={()=>{
				setPagina(pagina - 1)
			}}>
				{'<'}
			</Button>

			<Box w="100%">
				<SimpleGrid minW="100%" columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
					<StatsCard minW="100%" hoje={false} title={new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR') == atendeOntem.quando ? `Ontem (${atendeOntem.quando})` : atendeOntem.quando} stat={`${atendeOntem.quem}`} />
					<StatsCard minW="100%" hoje={true} title={new Date().toLocaleDateString('pt-BR') == atendeHoje.quando ? `Hoje (${atendeHoje.quando})` : atendeHoje.quando} stat={`${atendeHoje.quem}`} />
					<StatsCard minW="100%" hoje={false} title={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR') == atendeAmanha.quando ? `Amanhã (${atendeAmanha.quando})` : atendeAmanha.quando} stat={`${atendeAmanha.quem}`} />
				</SimpleGrid>
			</Box>

			<Button p="3rem 0" onClick={()=>{
				setPagina(pagina + 1)
			}}>
				{'>'}
			</Button>
			</Box>
			
		</Box>
	);
}