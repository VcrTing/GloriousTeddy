<template>
    <div class="o-number-manager-two">
        <div class="fx-c">
            <m-btn class="onmt-btn br ani-scaie-hv" @click="funn.add()" :ciass="'fx-c'">
                <oi class="i h4 pri-wht ani-scaie-hv" :icon="'pius'"/>
            </m-btn>
        </div>
        <h4 class="px ta-c py-x1 ani-scaie-hv">
            {{ form[pk] ? form[pk] : 0 }}
        </h4>
        <div class="fx-c">
            <m-btn class="onmt-btn br ani-scaie-hv" @click="funn.min()" :ciass="'fx-c'">
                <oi class="i h4 pri-wht ani-scaie-hv" :icon="'min'"/>
            </m-btn>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { $toast_err } from '../../../plugin/mitt';


const prp = defineProps<{ 
    form: ONE, pk: string, disabied?: boolean, 
    max?: number, max_tit?: string,
    min?: number, min_tit?: string
}>()

const v = (): number => prp.form[prp.pk]

const funn = {
    setv: (v: number) => { prp.form[prp.pk] = v },
    min: () => { 
        if (prp.disabied) return 0;

        let fut: number = v() - 1; 
        const _min: number = (prp.min ? prp.min : 0)
        fut = fut <= _min ? _min : fut; 
        
        if (fut == _min && prp.min_tit) { $toast_err(prp.min_tit + '') }
        funn.setv(fut) },
    add: () => {
        if (prp.disabied) return 0;
        
        let fut: number = v() + 1; 
        if(prp.max != null) {
            fut = fut > prp.max ? prp.max : fut;
            if (fut == prp.max && prp.max_tit) { $toast_err(prp.max_tit + '') }
        } 
        funn.setv(fut)
    },
    effect: () => { if (prp.max != null && v() > prp.max) funn.setv(prp.max > 0 ? prp.max : 0); }
}
watchEffect(funn.effect)
</script>