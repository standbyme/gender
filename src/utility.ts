import { Option } from 'funfix-core'

export function safe_get_from_map<A>(map: Map<string, A>, key: string): Option<A> {
    return Option.of(map.get(key))
}
