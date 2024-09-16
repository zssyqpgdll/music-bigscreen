# Music BigScreen
Music system in the large screen data visualization part, real-time view system usage, easy for managers to make decisions.

## Technical architecture
**Framework**: Vue2
**Data visualization library**: DataV, ECharts
**Icon library**: vue-awesome
**Back-end data processing**: Spark Java API

## Implement analysis function
**Basic information**: Singer, song, user statistics

**Songs played**: statistics of song played

**Collection of songs**: statistics of song collection

**Downloaded songs**: Statistics of downloaded songs

**User rankings by source**: Statistics by province are displayed in a bar chart

**User source composition**: Pie chart shows user source

**User top up ranking**: gold master ranking

**Login trend line chart**: Displays the login trend by date

**Play volume Line chart**: Displays the play volume trend by date

**Artist Song Play chart**: Artist Song Play chart

**User behavior perception analysis**: login, recharge, favorites, play, download, real-name authentication radar map


## precondition
Download DataV:
```bash
npm install @jiaminghi/data-view
```

Download ECharts:
```bash
npm install echarts
```

Download vue-awesome:
```bash
npm install vue-awesome
```

## Run command
First install dependencies:
```bash
npm install
```

Then launch the development environment:
```bash
npm run serve
```