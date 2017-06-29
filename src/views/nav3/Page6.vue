<template>
    <section>page6...
        <component ref="test" :is="currentComp" message='wo shi message'>
            <template scope="aaaa">
                <div slot="header">
                    <p>hello header </p>
                    <p>hello2 header </p>
                    <p>{{aaaa.text}}</p>
                </div>
                adlfalsdjflkajsdlkfjl
            </template>
        </component>
        <button @click="toggle()">Toggle</button>
        <test3 inline-template>
            <div>parenlnasldfklasdfl{{parentMsg}}</div>
        </test3>
        <button @click="parent_do_some">parent button</button>
    </section>
</template>

<script>
    import test1 from './test.vue';
    import test2 from './test2.vue';



    export default {
        created:function(){
            this.$options.components.test3 = {
                template:'<h2 @click="doSome">this is test3</h2>',
                methods:{
                    doSome:function(){
                        alert('clicked');
                    }
                }
            };
        },
        data(){
            return {
                currentComp:test1,
                parentMsg:'parentMsg'
            }
        },
        methods:{
            toggle:function(){
                this.currentComp = this.currentComp == test1 ?test2:test1 ;
                console.log(this.$refs.test)
            },
            sub_do_some:function(){
//                console.log(this.$parent)
                this.parent_do_some();
            }
        },
        components: {
            test1,test2
        }
    }
</script>