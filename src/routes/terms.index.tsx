import { createFileRoute } from '@tanstack/react-router';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { LayoutLegal } from '@/features/legal/layout-legal';
import { getPageTitle } from '@/lib/get-page-title';

export const Route = createFileRoute('/terms/')({
  head: () => ({
    meta: [
      { title: getPageTitle('Условия использования') },
      {
        name: 'description',
        content:
          'Условия использования B2B POS-системы iziMag для организаций и уполномоченных сотрудников.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LayoutLegal
      title="Условия использования"
      description="B2B POS-система iziMag · izimag.kz"
    >
      <Card>
        <CardContent className="space-y-6 pt-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              1. Принятие условий
            </h2>
            <p>
              Настоящие Условия использования (далее — «Условия») регулируют
              доступ и использование B2B POS-системы{' '}
              <strong className="text-foreground">iziMag</strong> (далее —
              «Сервис»), включая веб-интерфейс, кассовое приложение и серверную
              инфраструктуру на базе TrailBase.
            </p>
            <p>
              Используя Сервис, вы подтверждаете, что действуете от имени
              организации-пользователя и имеете полномочия принимать настоящие
              Условия.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              2. Назначение Сервиса
            </h2>
            <p>
              iziMag предназначен для автоматизации кассовых операций в B2B
              сегменте: учёт продаж, смен, справочников товаров и резервное
              копирование данных. Сервис не является публичным потребительским
              приложением и предоставляется организациям по договорённости
              с оператором.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              3. Регистрация и авторизация
            </h2>
            <p>
              Доступ к Сервису предоставляется уполномоченным сотрудникам
              организации через авторизацию{' '}
              <strong className="text-foreground">Google OAuth 2.0</strong>,
              обрабатываемую через OAuth2-шлюз{' '}
              <strong className="text-foreground">TrailBase</strong>.
            </p>
            <p>
              При авторизации обрабатываются только имя и адрес электронной
              почты из профиля Google для создания учётной записи iziMag.
              Пользователь обязан обеспечивать конфиденциальность своей
              учётной записи Google и незамедлительно уведомлять оператора о
              несанкционированном доступе.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              4. Local-first режим и синхронизация
            </h2>
            <p>
              Кассовое приложение может работать офлайн с локальным хранением
              данных на устройстве (IndexedDB). Организация-пользователь несёт
              ответственность за физическую безопасность устройств и контроль
              доступа к ним.
            </p>
            <p>
              Периодическая передача JSON-дампов на сервер TrailBase по
              WebSocket является частью функционала резервного копирования.
              Организация обязуется не передавать через Сервис данные, обработка
              которых нарушает применимое законодательство.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              5. Допустимое использование
            </h2>
            <p>Запрещается:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>пытаться обойти механизмы безопасности или авторизации;</li>
              <li>использовать Сервис для незаконной деятельности;</li>
              <li>вмешиваться в работу серверов, API или WebSocket-каналов;</li>
              <li>
                копировать, декомпилировать или распространять Сервис без
                согласия оператора;
              </li>
              <li>
                передавать доступ третьим лицам вне организации-пользователя.
              </li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              6. Интеллектуальная собственность
            </h2>
            <p>
              Права на программное обеспечение iziMag, дизайн, документацию и
              бренд принадлежат оператору или его лицензиарам. Организации
              предоставляется ограниченная неисключительная лицензия на
              использование Сервиса в рамках договора.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              7. Доступность и изменения
            </h2>
            <p>
              Оператор стремится обеспечивать бесперебойную работу Сервиса, но
              не гарантирует абсолютную доступность. Технические работы,
              обновления и изменения функционала могут выполняться без
              предварительного уведомления, если это не противоречит договору с
              организацией.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              8. Ограничение ответственности
            </h2>
            <p>
              Сервис предоставляется «как есть» в пределах, допустимых
              применимым законодательством. Оператор не несёт ответственности
              за убытки, вызванные перебоями связи, действиями третьих лиц
              (включая Google), либо ненадлежащим использованием Сервиса
              организацией или её сотрудниками, за исключением случаев,
              прямо предусмотренных договором.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              9. Конфиденциальность
            </h2>
            <p>
              Обработка персональных данных регулируется{' '}
              <a
                href="/privacy"
                className="text-foreground underline-offset-4 hover:underline"
              >
                Политикой конфиденциальности iziMag
              </a>
              , являющейся неотъемлемой частью настоящих Условий.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              10. Применимое право и контакты
            </h2>
            <p>
              Настоящие Условия регулируются законодательством Республики
              Казахстан, если иное не согласовано в договоре с
              организацией-пользователем.
            </p>
            <p>
              Вопросы по Условиям:{' '}
              <a
                href="mailto:support@izimag.kz"
                className="text-foreground underline-offset-4 hover:underline"
              >
                support@izimag.kz
              </a>
            </p>
            <p>
              Актуальная версия:{' '}
              <strong className="text-foreground">https://izimag.kz/terms</strong>
              . Дата последнего обновления:{' '}
              <strong className="text-foreground">18 июня 2026 г.</strong>
            </p>
          </section>
        </CardContent>
      </Card>
    </LayoutLegal>
  );
}
