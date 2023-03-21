interface DietData {
    imageSrc : string,
    date: string,
    recordType: string
}
const dietData : DietData[] = 
    [
        {"imageSrc": '/images/diet01.jpg', "date": "05.21", "recordType": "Morning"},
        {"imageSrc": "/images/diet02.jpg", "date": "05.21", "recordType": "Morning"},
        {"imageSrc": "/images/diet04.jpg", "date": "05.21", "recordType": "Morning"},
        {"imageSrc": "/images/diet04.jpg", "date": "05.21", "recordType": "Morning"},
        {"imageSrc": "/images/diet05.jpg", "date": "05.20", "recordType": "Afternoon"},
        {"imageSrc": "/images/diet06.jpg", "date": "05.20", "recordType": "Lunch"},
        {"imageSrc": "/images/diet07.jpg", "date": "05.20", "recordType": "Dinner"},
        {"imageSrc": "/images/diet08.jpg", "date": "05.20", "recordType": "Morning"},
        {"imageSrc": "/images/diet05.jpg", "date": "05.20", "recordType": "Afternoon"},
        {"imageSrc": "/images/diet06.jpg", "date": "05.20", "recordType": "Lunch"},
        {"imageSrc": "/images/diet07.jpg", "date": "05.20", "recordType": "Dinner"},
        {"imageSrc": "/images/diet08.jpg", "date": "05.20", "recordType": "Morning"},
        {"imageSrc": "/images/diet07.jpg", "date": "05.20", "recordType": "Dinner"},
        {"imageSrc": "/images/diet08.jpg", "date": "05.20", "recordType": "Morning"},
        {"imageSrc": "/images/diet05.jpg", "date": "05.20", "recordType": "Afternoon"},
        {"imageSrc": "/images/diet05.jpg", "date": "05.20", "recordType": "Afternoon"},
        {"imageSrc": "/images/diet06.jpg", "date": "05.20", "recordType": "Lunch"},
        {"imageSrc": "/images/diet07.jpg", "date": "05.20", "recordType": "Dinner"},
        {"imageSrc": "/images/diet08.jpg", "date": "05.20", "recordType": "Morning"},
        {"imageSrc": "/images/diet05.jpg", "date": "05.20", "recordType": "Afternoon"},
        {"imageSrc": "/images/diet06.jpg", "date": "05.20", "recordType": "Lunch"},
        {"imageSrc": "/images/diet07.jpg", "date": "05.20", "recordType": "Dinner"},
    ]

  
  const exerciseTypes = [
    {title: "BODY RECORD", imgSrc: "/images/my-body.jpg", btnName: "自分のカラダの記録" },
    {title: "MY EXERCISE", imgSrc: "/images/my-exercise.jpg", btnName: "自分のカラダの記録" },
    {title: "MY DIARY", imgSrc: "/images/my-diary.jpg", btnName: "自分の日記" },
  ]
    

  const dataDietGraph = {
    labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    datasets: [
      {
        label: '',
        data: [33, 53, 85, 41, 44, 65, 88, 85, 41, 44, 65, 44],
        borderColor: '#FFCC21',
        backgroundColor: '#FFCC21',
      },
      {
        label: '',
        data: [55, 33, 55, 23, 75, 32, 87, 85, 41, 44, 65, 33],
        borderColor: '#8FE9D0',
        backgroundColor: '#8FE9D0',
      },
    ],
  };
      const optionsDietGraph = {
        responsive: true,
        
        plugins: {
          legend: {
            position: 'top' as const,
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Line Chart',
          },
          yaxis: {
            display: false,
          },
          
          customCanvasBackgroundColor: {
            color: '#2E2E2E',
          }
        },
      };
      const plugin = {
        id: 'customCanvasBackgroundColor',
        beforeDraw: (chart : any, args : any, options : any) => {
          const {ctx} = chart;
          ctx.save();
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = options.color || '#2E2E2E';
          ctx.fillRect(0, 0, chart.width, chart.height);
          ctx.restore();
        }
      };

interface ExerciseData {
    name: string,
    time: string, 
    calories: string
}
const exerciseData : ExerciseData[] = [
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
    {name: "家事全般（立位・軽い)", time: "10 min", calories: "26kcal"},
   
    
];
interface DiaryLog {
    logTime: string,
    logContent: string,
} 
const diaryLogs : DiaryLog[] = [
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
    {logTime: "2021.05.21 23:25", logContent: "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"},
]
const recommendedData = [
    {title: "RECOMMENDED COLUMN", name: "オススメ"},
    {title: "RECOMMENDED DIET", name: "ダイエット"},
    {title: "RECOMMENDED BEAUTY", name: "美容"},
    {title: "RECOMMENDED HEALTHY", name: "美容"}
]
interface ColumnData {
    imageSrc: string,
    date: string, 
    time: string, 
    content: string,
    hashtag: string,
}
const columnData : ColumnData[] = [
        {"imageSrc": '/images/column01.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column02.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column03.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column04.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column05.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column06.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column07.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column08.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column03.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column04.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column05.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column06.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column07.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column07.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column08.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column03.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
        {"imageSrc": '/images/column04.jpg', "date": "2021.05.21", "time": "23:25", "content": "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…", "hashtag":"#魚料理  #和食  #DHA"},
    ]

export {dietData, dataDietGraph, optionsDietGraph, plugin, exerciseTypes, diaryLogs, exerciseData, recommendedData, columnData}; 