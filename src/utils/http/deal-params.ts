interface requestPrams {
    [key: string]: any
}
import { isObject, isUnDef, isNull } from '@/utils/is';

export function dealNullParams(data: requestPrams) {
    if (isObject(data)) {
        for (const key in data) {
            if (isNull(data[key]) || isUnDef(data[key])) delete data[key]
        }
        return data
    }
    return data
}
