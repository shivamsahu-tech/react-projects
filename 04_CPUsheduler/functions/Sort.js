export default function Sort(processes, type){
    if(type == 'fcfs'){
        processes.sort((a, b) => a.at - b.at)
        return processes;
    } else if(type == 'sjf'){
        processes.sort((a, b) => a.at - b.at)
       
        let currTime = parseInt(processes[0].at);
        for(let i = 0; i < processes.length; i++){
        let minIdx = i;
        for(let j = i; j < processes.length; j++){
            if(currTime >= parseInt(processes[j].at) && parseInt(processes[j].bt) < parseInt(processes[minIdx].bt)){
            minIdx = j;
            }
        }
        let temp = processes[i];
        processes[i] = processes[minIdx];
        processes[minIdx] = temp;


        currTime += parseInt(processes[i].bt);
        }
      
        return processes;
    }
}