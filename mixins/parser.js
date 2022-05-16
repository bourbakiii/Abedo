export default{
    methods:{
        parseDate(date, {with_time= true})
        {
            return date[0];
        },
        parseAddress(address){
            return `${address.city}, ${address.street ? "ул. " + address.street : ""} ${address.house}${address.block ? ", " + address.block : ""}`;
        }
    }
}