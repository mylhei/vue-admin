<template>
    <div>
        header:
        <slot name="header">this is header from slot</slot>
        none:
        <slot text="hello from child1"></slot>
        footer:
        <slot name="footer">this is footer from slot</slot>
        <h1>{{message}}</h1>
    </div>
</template>
<script>
    export default {
        props:['message'],
        data(){
            return {
            }
        }
    }
</script>