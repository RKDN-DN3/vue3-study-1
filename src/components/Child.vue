<template>
  <div style="border: 1px solid;padding: 15px;margin: 15px;">
    <h3>Child</h3>
    <input
      :value="txt1"
      @keyup="update($emit,$event,'txt1')"
      placeholder="txt1"
    />
    <input
      :value="txt2"
      @keyup="$emit('update:txt2', $event.target.value)"
      placeholder="txt2"
    />
    <p v-text="txt1"></p>
    <p v-text="txt2"></p>
  </div>
</template>

<script>
export default {
    name: 'child',
    props: {
        txt1: String,
        txt2: String
    },
    methods: {
        update (emit, event, nameUpdate) {
            emit('update:' + nameUpdate, event.target.value)
        }
    }
}
</script>
