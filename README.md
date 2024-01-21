# Clima-API

Bem-vindo à Clima-API! Esta API fornece informações meteorológicas, previsões e outros dados relacionados ao clima.

## Configuração

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/clima-api.git
   cd clima-api

   ```

2. **Instale as Dependências**
   npm install

3. **Configure o Arquivo.env**
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   API_KEY=your_openweathermap_api_key
   Certifique-se de substituir your_openweathermap_api_key pela sua chave da API do OpenWeatherMap.

## Executando o Servidor:

1. **Inicie o Servidor**
   npm start
   O servidor estará disponível em http://localhost:3000 por padrão.

## Endpoints Disponíveis:

`/weather/current`: Obtém informações meteorológicas atuais.
`/weather/forecast`: Obtém previsões meteorológicas até 5 dias de respectiva localização.
`/weather/moisture`: Obtém informações sobre umidade do ar.
`/weather/windspeed`: Obtém informações sobre a velocidade do vento.

## Parâmetros de Consulta:

`city` (obrigatório): Nome da cidade para consulta.
`units` (opcional): Unidade de medida de temperatura (metric=Celcius, imperial=Fahrenheit).
`lang` (opcional): Idioma das informações (pt_br, en, es).

Exemplo de consulta:

GET http://localhost:3000/weather/current?city=SaoPaulo&units=metric&lang=pt_br
