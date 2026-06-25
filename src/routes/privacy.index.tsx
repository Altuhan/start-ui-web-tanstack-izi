import { createFileRoute } from '@tanstack/react-router';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { LayoutLegal } from '@/features/legal/layout-legal';
import { getPageTitle } from '@/lib/get-page-title';

export const Route = createFileRoute('/privacy/')({
  head: () => ({
    meta: [
      { title: getPageTitle('Политика конфиденциальности') },
      {
        name: 'description',
        content:
          'Политика конфиденциальности B2B POS-системы iziMag для организаций и уполномоченных сотрудников.',
      },
      { name: 'robots', content: 'index, follow' },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LayoutLegal
      title="Политика конфиденциальности"
      description="B2B POS-система iziMag · izimag.kz"
    >
      <Card>
        <CardContent className="space-y-6 pt-6 text-sm leading-relaxed text-muted-foreground">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              1. Общие положения
            </h2>
            <p>
              Настоящая Политика конфиденциальности (далее — «Политика»)
              описывает порядок обработки информации в рамках B2B
              POS-системы <strong className="text-foreground">iziMag</strong>{' '}
              (далее — «Сервис»), доступной по адресу{' '}
              <strong className="text-foreground">https://izimag.kz</strong>.
            </p>
            <p>
              Сервис предназначен для юридических лиц и их уполномоченных
              сотрудников (кассиров, администраторов) для ведения розничных
              продаж, учёта смен и справочников с возможностью работы при
              нестабильном интернете и последующей синхронизации данных.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              2. Оператор и контактные данные
            </h2>
            <p>
              Оператором персональных данных, обрабатываемых через
              веб-интерфейс и серверную часть Сервиса, является владелец
              продукта iziMag.
            </p>
            <p>
              По вопросам конфиденциальности:{' '}
              <a
                href="mailto:support@izimag.kz"
                className="text-foreground underline-offset-4 hover:underline"
              >
                support@izimag.kz
              </a>
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              3. Регистрация и вход в Сервис
            </h2>
            <p>
              Для входа в Сервис используется авторизация через учётную запись{' '}
              <strong className="text-foreground">Google</strong>. При первичном
              входе Сервис запрашивает и получает только минимально необходимые
              данные профиля:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>имя пользователя;</li>
              <li>адрес электронной почты.</li>
            </ul>
            <p>
              Эти данные используются для идентификации пользователя, создания и
              сопровождения учётной записи iziMag, а также для обеспечения
              безопасности доступа. Сервис не запрашивает и не обрабатывает
              пароль учётной записи Google.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              4. Данные на устройствах организации
            </h2>
            <p>
              Кассовое приложение iziMag может обрабатывать и временно хранить
              данные о продажах, сменах и справочниках на планшете или терминале
              организации-пользователя для обеспечения непрерывной работы
              кассы.
            </p>
            <p>
              Локальные данные хранятся на устройстве организации и не
              передаются третьим лицам вне сценариев, описанных в настоящей
              Политике.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              5. Синхронизация и резервное копирование
            </h2>
            <p>
              Периодически (например, по окончании смены или по расписанию,
              установленному организацией) данные кассы могут передаваться на
              серверы Сервиса по защищённому соединению для резервного
              копирования, восстановления, аудита и непрерывности
              бизнес-процессов организации-пользователя.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              6. Цели обработки данных
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>предоставление доступа к Сервису и его функциям;</li>
              <li>аутентификация и управление сессиями;</li>
              <li>ведение кассовых операций и отчётности;</li>
              <li>резервное копирование и восстановление данных;</li>
              <li>обеспечение безопасности и предотвращение злоупотреблений;</li>
              <li>техническая поддержка и улучшение Сервиса.</li>
            </ul>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              7. Передача данных третьим лицам
            </h2>
            <p>
              Данные могут передаваться следующим категориям получателей только
              в объёме, необходимом для работы Сервиса:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                <strong className="text-foreground">Google LLC</strong> — при
                входе через учётную запись Google (в соответствии с политикой
                конфиденциальности Google);
              </li>
              <li>
                инфраструктурным провайдерам (хостинг), действующим как
                обработчики данных по договору.
              </li>
            </ul>
            <p>
              Оператор не продаёт персональные данные и не передаёт их для
              сторонней рекламной персонализации.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              8. Хранение и защита данных
            </h2>
            <p>
              Данные защищаются организационными и техническими мерами:
              шифрование каналов связи, разграничение доступа, журналирование,
              резервное копирование. Сроки хранения определяются требованиями
              законодательства Республики Казахстан и договором с
              организацией-пользователем.
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              9. Права субъектов данных
            </h2>
            <p>
              Пользователь вправе запросить доступ, уточнение, ограничение
              обработки или удаление персональных данных в пределах,
              предусмотренных применимым законодательством, направив запрос на{' '}
              <a
                href="mailto:support@izimag.kz"
                className="text-foreground underline-offset-4 hover:underline"
              >
                support@izimag.kz
              </a>
              .
            </p>
          </section>

          <Separator />

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-foreground">
              10. Изменения Политики
            </h2>
            <p>
              Оператор вправе обновлять Политику. Актуальная версия всегда
              доступна по адресу{' '}
              <strong className="text-foreground">
                https://izimag.kz/privacy
              </strong>
              . Дата последнего обновления:{' '}
              <strong className="text-foreground">20 июня 2026 г.</strong>
            </p>
          </section>
        </CardContent>
      </Card>
    </LayoutLegal>
  );
}
