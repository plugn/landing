<template>
        <form class="form-auth-root">
            <div class="flex-col">
                <div class="stretch form-row alm-auth-form">
                    <div class="flex-row alm-card-top-row">
                        <span class="alm-card-title">Благодарим за регистрацию на Alabom!</span>
                    </div>
                    <div class="form-row alm-card-body">
                        <p>До того как начать покупки, подтвердите электронную почту указанную при регистрации.</p>
                        <p>На адрес mail@mail.ru отправлено письмо с ссылкой-подтверждением.</p>
                    </div>
                    <div class="flex-row form-row">
                        <input class="form-input auth-button" type="button" value="Начать покупки"
                        @click="$router.push('/')">
                    </div>
                </div>
            </div>
        </form>
</template>
