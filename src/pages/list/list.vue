<template>
    <div class="container p-n">
        <vm-list :source="source" arrow="true"></vm-list>
        <vm-list class="m-t" :source="source" arrow="false"></vm-list>

        <vm-list-row class="m-t">
            <vm-list-item arrow="true">
                <vm-list-hd>
                    <img style="width: 60px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABiCAIAAAAkx5FZAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKISURBVHhe7dQ7jtswGADhnMkH9VV8DwN7BTXbbuXGzQKO+JD0kyLkqWwDO8IgSBg9yE+U/52+TvY0mVAyoWRCyYSSCSUTSiaUTCiZUDKhZELJhJIJJRNKJpRMKJlQMqFkQsmEkgklE0omlEwomVAyoWRCyYSSCSUTSiaUTCiZUDKhZELJhJIJJRNKJpRMKJlQkOl8/X08fq/nfjx1vt0ej9v1ux9nDe98mR7z0d0zn3m/hJFBl/t84XQ5Hv++phnfzvGE4/Bu+kkzn35242z2B2XldmH5WfPRrISt7d1M5Q3vOfIjR3y43QtIS7pfyp/rYD7t+Z59O9PotTePT47x2buPsXxK5ejHw4X1n93j0oO2bzNv4eXoid/LNLp7XOEhU7523R2dYEOQzsz/lS9ZCOKnnbnX89vN+AFM3Xrmmg/hiGk3++aXO26c9Pc6ns6pNwxkHfFcvPlHMLUu3Y/3AVN+/+3vWqQJCoEmvpX03HJy41sLs/oMpkgT3nDuGdPgWNez6HT3XNa/eZUJDI7PYtp2QZh66QnT8bTq3bZdU0oXTj9xi4X3NKrZpFv5qnW2L2BaXvh+5f1IfoHhJbdfSj+SgaZ5sCHIQPep/qjnwT1EM5LuE/d4qZ3bK5jq+jeCdryZ7nZOntlGMFhMWkm6oJ19JpiPfosdbI34enLlOw13eA1TJRjs/DKhfNQvKE63QuSjJ16u3Y13vrXwoMHeWXGXo7v8RUx/L5lQMqFkQsmEkgklE0omlEwomVAyoWRCyYSSCSUTSiaUTCiZUDKhZELJhJIJJRNKJpRMKJlQMqFkQsmEkgklE0omlEwomVAyoWRCyYSSCSUTSiaUTCiZUDKhZAJ9nf4D097tbUtYXkMAAAAASUVORK5CYII=" alt="">
                </vm-list-hd>
                <vm-list-bd class="m-l">
                    很不错啊
                </vm-list-bd>
                <vm-list-ft>点这里</vm-list-ft>
            </vm-list-item>
        </vm-list-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                source: [
                    {
                        name: '第一列'
                    },

                    {
                        name: '第二列'
                    }
                ]
            };
        }
    };
</script>

<style scoped>
@import '../style/style.css';
</style>
