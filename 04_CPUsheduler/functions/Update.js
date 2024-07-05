// 

let idx = 0;

function updateState({t, processes, helper, setComplete}){

    if(helper[idx].endTime < parseInt(t)+1) idx++;
    if(idx == processes.length) return -1;
    if(parseInt(t)+1 >= helper[idx].startTime){
        let obj = helper[idx];
        let comp = ((100*(parseInt(t)+1-obj.startTime))/(obj.endTime - obj.startTime));
        setComplete(helper[idx].id);
        return {
            idx: idx,
            comp: comp
        }
    }
    return null

}

export default updateState;