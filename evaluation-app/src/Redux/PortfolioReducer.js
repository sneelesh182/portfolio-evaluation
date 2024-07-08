import { SOLIDS,LINEAR_GRADIENT,RADIAL_GRADIENT } from "./ActionType";
const initialState={
    solidColor:'',
    linearGradientValue1:'',
    linearGradientValue2:'',
    radialGradientValue1:'',
    radialGradientValue2:'',
}
export const PortfolioReducer=(state=initialState,{type,SolidPayload,LinearPayload1,LinearPayload2,RadialPayload1,RadialPayload2})=>{
    switch(type){
        case SOLIDS:
        return {...state,solidColor:SolidPayload}
        case LINEAR_GRADIENT:
            return {...state,linearGradientValue1:LinearPayload1,linearGradientValue2:LinearPayload2}
            case RADIAL_GRADIENT:
                return {...state,radialGradientValue1:RadialPayload1,radialGradientValue2:RadialPayload2}
        default:
            return state
    }
}